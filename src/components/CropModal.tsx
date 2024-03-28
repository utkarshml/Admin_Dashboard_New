
import { Ref } from "react";
import Modal from "./Modal";
import "../styles/ProductManagementBtn.scss"
import { FixedCropper, FixedCropperRef, ImageRestriction } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css"

type  cropProps   = {
    image : string | undefined
    openModal : boolean,
    closeModal : ()=>void,
    cropRef : Ref<FixedCropperRef>,
    onCrop : ()=> void
}
export default function CropModal( { image ,onCrop,  openModal , closeModal , cropRef} : cropProps) {
  return (
    <Modal  open={openModal} onClose={closeModal}>
    <div onClick={(e) => e.stopPropagation()} className="crop-modal">
     <div className="crop-header">   <h4 style={{margin: "1rem"}}>Crop Image</h4></div>
    <div className="crop-box">
    <FixedCropper
   
    ref={cropRef}
    style={{height :"300px", width: "400px"}}
src={image}
stencilProps={{
   handlers: false,
   lines: true,
   movable: false,
   resizable: false,
}}

stencilSize={{
   width: 400,
   height: 400 
}}
imageRestriction={ImageRestriction.stencil}
/>

    </div>
    <div className="crop-btn">
    <button >Cancel</button>
   <button onClick={onCrop} >Crop</button>
    </div>
    </div>
</Modal>
  )
}
