
import { ColumnDef } from "@tanstack/react-table"
import GetTable from "../../components/Table";
import "../../styles/customer.scss";
 import {productMock} from "../../assets/product_mock"
 import { FaPlus } from "react-icons/fa";
import AdminSideBar from "../../components/AdminSideBar";
import Admin_header from "./Admin_header";
import ProductManagementBtn from "../../components/ProductManagementBtn";
import Modal from "../../components/Modal";
import { useState } from "react";
type ProductType =  {
 photo : string,
 name : string,
 price : number,
 stock : number,
}
const productColumn : ColumnDef<ProductType>[]= [
  {
    header : "Photo",
    accessorKey : "photo",
    cell: ( { cell}) => {
      // value is the value of the property for this row
      // You can return any JSX element here
      return <img style={{height  : "3.5rem" , width : "3.5rem"}} src={cell.row.getValue("photo")} alt={cell.row.getValue("name")} />;
    },
  },
  {
    header : "Name",
    accessorKey : "name"
  },
  {
    header : "Price",
    accessorKey : "price",
    
  },
  {
    header : "stock",
    accessorKey : "stock"
  },
  {
    header : "Action",
    accessorKey : "action",
    cell: ( ) => {
      // value is the value of the property for this row
      // You can return any JSX element here
      return <ProductManagementBtn text="More"/>
    },
  },
]




function Inventory() {
  const [open , setOpen] = useState<boolean>(false);
  const [productName , setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const  [stock , setStock] = useState<number>();
  return (
    <>
    <div className="container">
       <AdminSideBar />
      <main>
        <Admin_header/>
      <div style={{
        padding: "2rem 1.5rem"
      }}>
        <h2 style={
       {
        marginBottom : "1rem",
        textTransform : "uppercase"
       }
        }>Inventory</h2>
      <GetTable columns={productColumn} data={productMock} pageSize={10} isPagination={true}/> 
      </div>
      </main>
      <div onClick={()=>setOpen(true)} className="add-product-btn">
          <FaPlus/>
      </div>
    </div>
    <Modal open={open} onClose={()=>setOpen(false)}>
      <div onClick={(e)=> e.stopPropagation()} className="modal-body">
      <form action="post">
            <div className="input-box">
            <label htmlFor="product-name-input">Produt Name</label>
            <input onChange={(e)=> setProductName(e.target.value)} value={productName} className="product-name-input" name="product-name" placeholder="Enter Product name" type="text"/>
            </div>
            <div className="input-box">
            <label htmlFor="product-price-input">Price</label>
            <input  onChange={(e)=> setPrice(parseInt(e.target.value))} value={price} className="product-price-input" name="product-price" placeholder="Enter Product Price" type="number"/>
            </div>
            <div className="input-box">
            <label htmlFor="product-stock-input">Stock</label>
            <input  onChange={(e)=> setStock(parseInt(e.target.value))} value={stock} className="product-stock-input" name="product-stock" placeholder="Enter Product Stock" type="number"/>
            </div>
            <div className="input-box">
          <label htmlFor="product-image-input">Produt Image</label>
          <input  className="product-image-input" name="product-image" placeholder="Enter Product image" type="file"/>
            </div>
          <input  className="create-btn" type="button" value="Add"/>
          </form>
      </div>

    </Modal>
    </>

  )
}


export default Inventory;



