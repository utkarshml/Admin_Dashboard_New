
import { ColumnDef } from "@tanstack/react-table"
import GetTable from "../../components/Table";
import { productMock } from "../../assets/product_mock"
import { FaChevronRight, FaPlus } from "react-icons/fa";
import AdminSideBar from "../../components/AdminSideBar";
import Admin_header from "../../components/Admin_header";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProductType = {
  photo: string,
  name: string,
  price: number,
  stock: number,
}


const productColumn: ColumnDef<ProductType>[] = [
  {
    header: "Photo",
    accessorKey: "photo",
    cell: ({ cell }) => {
      return <img
        style={{ height: "3.5rem", 
                 width: "3.5rem" }}
         src={cell.row.getValue("photo")} 
         alt={cell.row.getValue("name")} />;
    },
  },
  {
    header: "Name",
    accessorKey: "name"
  },
  {
    header: "Price",
    accessorKey: "price",

  },
  {
    header: "Stock",
    accessorKey: "stock"
  },

  {
    header: "Action",
    accessorKey: "action",
    cell: () => {
      return <Link className="user-manage-btn" to={"/admin/inventory/manage"}><FaChevronRight /></Link>
    },
  },
]




function Inventory() {
 const [toggle ,setToggle] = useState<boolean>(false);
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
          <Admin_header onClick={Handler}  />
          <div style={{
            padding: "2rem 1.5rem",
            overflowX : "auto"
          }}>
            <h2 style={
              {
                marginBottom: "1rem",
                textTransform: "uppercase"
              }
            }>Inventory</h2>
            <GetTable columns={productColumn} data={productMock} pageSize={10} isPagination={true} />
          </div>
        </main>
        <Link to={"/admin/inventory/add"} className="add-product-btn">
          <FaPlus />
        </Link>
      </div>
    
    </>

  )
}

export default Inventory;
