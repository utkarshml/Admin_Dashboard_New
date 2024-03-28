
import { ReactElement, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";
import GetTable from "../../components/Table";
import Admin_header from "./Admin_header";
import { ColumnDef } from "@tanstack/react-table";
import ProductManagementBtn from "../../components/ProductManagementBtn";
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
  profile : "https://picsum.photos/200/300" ,
  gender : "Male",
  role : "User",
  action : <button>Action</button>,
  email : "utkarshjais8957@gmail.com"
},
{
  id : "1",
  name : "Utkarsh",
  profile : "https://picsum.photos/200/300",
  gender : "Male",
  role : "User",
  action : <button>Action</button> ,
  email : "utkarshjais8957@gmail.com"
}]
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
      return <ProductManagementBtn text="Delete"/>
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
      <div style={{
        padding: "2rem 1.5rem"
      }}>
        <h2 style={
       {
        marginBottom : "1rem",
        textTransform : "uppercase"
       }
        }>Customer</h2>
        <GetTable isPagination={true} columns={CustomerCol} data={customerData} pageSize={10}/>
      </div>
      </main>
    </div>
    </>
  )
}

export default Customer;

