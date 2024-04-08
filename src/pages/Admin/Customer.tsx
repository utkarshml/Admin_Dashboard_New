
import { ReactElement, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import GetTable from "../../components/Table";
import Admin_header from "../../components/Admin_header";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import sampleImage from "../../image/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
// This element css comes from app.scss
interface CustomerColTye {
  id : string,
  profile : string,
  name : string,
  gender : string,
  email : string,
  role : string,
  action  : ReactElement
  
}



const customerData : CustomerColTye[] = [{
  id : "1",
  name : "Utkarsh",
  profile : sampleImage ,
  gender : "Male",
  role : "User",
  action : <button>Action</button>,
  email : "utkarshjais8957@gmail.com"
},
]
const CustomerCol : ColumnDef<CustomerColTye>[] = [
  {
    header : "Id",
    accessorKey : "id"
  },
  {
    header : "Profile",
    accessorKey : "profile",
    cell: ( { cell}) => {
      return <img style={{height  : "3.5rem" , width : "3.5rem" , borderRadius: "50%"}} src={cell.row.getValue("profile")} alt={cell.row.getValue("name")} />;
    },
  },
  {
    header : "Name",
    accessorKey: "name",
    
  },
  {
    header : "Gender",
    accessorKey : "gender"
  },
  {
    header : "Email",
    accessorKey : "email"
  },
  {
    header : "Role",
    accessorKey : "role"
  },
  {
    header : "Action",
    accessorKey : "action",
    cell: () => {
      // this element css comes from app.scss
      return <Link className="user-manage-btn" to={"/admin/customer/user"} children={<span>Manage</span>} />
    },
  },
]
function Customer() {
  const[toggle , setToggle] = useState<boolean>(false);
  const Handler = () =>{
     setToggle(!toggle);
  }
  const onclose = () => {
      setToggle(false);
  }
  return (
    <>
    <div className="container">
       <AdminSideBar onClose={onclose} reacted={toggle} />
      <main>
      <Admin_header onClick={Handler} />
      <h2 className="customer-heading">Customer</h2>
      <div  style={{
        padding: "2rem 1.5rem",
        overflowX: "auto"
      }}>
        <GetTable isPagination={true} columns={CustomerCol} data={customerData} pageSize={10}/>
      </div>
      </main>
    </div>
    </>
  )
}

export default Customer;

