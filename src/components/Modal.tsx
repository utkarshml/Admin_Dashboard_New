import { ReactElement } from "react";
import styled from "styled-components"

const Backdrop = styled.div`
  width : 100%;
  position : absolute;
  z-index : 99;
  height : 150vh;
  top : 0 ;
  left : 0 ;
  cursor :pointer;
  display : flex;
  padding : 1.5rem;
  justify-content : center ;
  align-items : center;
  overflow-y: auto;
`;
interface ModalProp {
    onClose  : ()=>void,
    open : boolean,
    children  : ReactElement
}
function Modal({onClose , open , children} : ModalProp) {
  return (
    // Backdrop 
    <Backdrop onClick={onClose} style={{background : open ? "rgb(0,0,0,0.8)" : "invisible" , display : open ? "flex" : "none"} }>{children}</Backdrop>
  )
}

export default Modal