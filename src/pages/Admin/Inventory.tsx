
import { ColumnDef } from "@tanstack/react-table"
import GetTable from "../../components/Table";
import "../../styles/customer.scss";
import { productMock } from "../../assets/product_mock"
import { FaPlus } from "react-icons/fa";
import AdminSideBar from "../../components/AdminSideBar";
import Admin_header from "./Admin_header";
import { ChangeEvent, useRef, useState } from "react";
import Modal from "../../components/Modal";
import CropModal from "../../components/CropModal";
import { FixedCropperRef } from "react-advanced-cropper";
import sampleImage from "../../image/fff&text=+800x800+.png"
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
    header: "stock",
    accessorKey: "stock"
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: () => {
      return <button value="More" />
    },
  },
]




function Inventory() {
  const [open , setOpen] = useState<boolean>(false);
  const [cropModal , opneCropModal] = useState<boolean>(false);
  const[toggle , setToggle] = useState<boolean>(false);
  const [price , setPrice] = useState<number>(0);
  const [cropImage , setCropImage] = useState<string | undefined>(sampleImage);
  const [productName , setProductName] = useState<string>("");
  const [stock , setStock] = useState<number>(0);
  const [image , setImage] = useState<string>();
  const cropperRef = useRef<FixedCropperRef | null>(null);

   
  const ImageHandler = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file : File | undefined = e.target.files?.[0];
    const reader : FileReader = new FileReader();
    if(file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if(typeof reader.result === "string") {
            
            setImage(reader.result);

            opneCropModal(true);
          }

        }
    }
  }
  const onCrop = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();
      setCropImage(canvas?.toDataURL());
      opneCropModal(false);
    }
  };
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
            padding: "2rem 1.5rem"
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
        <div className="add-product-btn">
          <FaPlus onClick={()=>setOpen(true)} />
        </div>
      </div>
      {/* Modal of Add Product  */}
      <Modal open={open} onClose={()=>setOpen(false)}>
          <div  onClick={(e) => e.stopPropagation()} className="modal-body">
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
          <input  onChange={ImageHandler}  className="product-image-input" name="product-image" placeholder="Enter Product image" type="file"/>
          </div>
          {cropImage && <div className="image-output">
            <img  height={200} width={200} src={cropImage} alt="Proudct Image" />
          </div>}
          <input  className="create-btn" type="button" value="Update"/>
          </form>
            </div>
    </Modal>
    <CropModal onCrop={onCrop} cropRef={cropperRef} openModal={cropModal} closeModal={()=>opneCropModal(false)}  image={image}/>
    </>

  )
}

export default Inventory;
