import { ChangeEvent, useRef, useState } from "react";
import Modal from "./Modal";
import "../styles/ProductManagementBtn.scss";
import { FixedCropper, FixedCropperRef, ImageRestriction } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css'
// import { IoIosRedo, IoIosUndo } from "react-icons/io";
type ActionBtnProp = {
    text : string,
   
  }


   export const ProductManagementBtn =( {text } : ActionBtnProp) =>{
    const [open , setOpen] = useState<boolean>(false);
    const cropperRef = useRef<FixedCropperRef | undefined>();
    const [productName , setProductName] = useState<string>();
    const [price , setPrice] = useState<number>();
    const [stock , setStock] = useState<number>();
    const [photo , setPhoto] = useState<string>();
    const [crop , cropModal] = useState<boolean>(false);
    const ImageHandler = (e : ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        cropModal(true);
        const file : File | undefined = e.target.files?.[0];
        const reader : FileReader = new FileReader();
        if(file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              if(typeof reader.result === "string") setPhoto(reader.result)
            }
        }
    }

    const onCrop = () => {
      const cropper = cropperRef.current;
      if (cropper) {
        const canvas = cropper.getCanvas();
        setPhoto(canvas?.toDataURL());
        cropModal(true);
      }
    };
    return (
    <>
    <button onClick={() =>setOpen(true)} className="action-btn">
      {text}</button>
    
      <Modal open={open} onClose={() => setOpen(false)} >
        <div onClick={(e) => e.stopPropagation()} className="update-modal">
          <h2>Create Product</h2>
          <div className="modal-container">
            <div className="photo-details">
                <div><h4>ID : jdkfdjfkdljfdkjf</h4></div>
              {photo  &&  <img src={photo} alt="Product Image" /> } 
                <h4>Name</h4>
                <h2>1000</h2>
            </div>
          
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
          <input onChange={ImageHandler}  className="product-image-input" name="product-image" placeholder="Enter Product image" type="file"/>
          </div>
          <input  className="create-btn" type="button" value="Update"/>
          </form>
        </div>
        </div>
      </Modal>
    <Modal  open={crop} onClose={() => cropModal(true)}>
         <div onClick={(e) => e.stopPropagation()} className="crop-modal">
          <div className="crop-header">   <h4 style={{margin: "1rem"}}>Crop Image</h4>
          <div className="edit-btns">
            {/* <button ><IoIosUndo /></button>
            <button><IoIosRedo /></button> */}
          </div>
          </div>
         <div className="crop-box">
         <FixedCropper
         ref={cropperRef}
         style={{height :"400px", width: "600px"}}
    src={photo}
    stencilProps={{
        handlers: false,
        lines: true,
        movable: false,
        resizable: false,
    }}
    stencilSize={{
        width: 400,
        height: 300
    }}
    imageRestriction={ImageRestriction.stencil}
/>

         </div>
         <div className="crop-btn">
        <button onClick={onCrop}>Crop</button>
         </div>
         </div>
    </Modal>
    </>)
  }

export default ProductManagementBtn;