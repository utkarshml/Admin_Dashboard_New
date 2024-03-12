import { ReactElement } from "react";
import styled from "styled-components"

const Backdrop = styled.div`
  width  :100vw;
  height :100vh;
  position : fixed;
  z-index : 99;
  top : 0 ;
  left : 0 ;
  cursor :pointer;
  display : flex;
  justify-content : center ;
  align-items : center;
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