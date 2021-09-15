import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/all";

const PopUpPage = ({open,children,onClose}) =>{
    if(!open)
        return null;
    return ReactDom.createPortal(
        <>
            <OverlayStyles/>
            <PopUpStyles width = '60%'>
                <CloseIcon onClick={onClose}>Close Modal</CloseIcon>
                {children}
            </PopUpStyles>

        </>,
        document.getElementById('portal')
    )
}
const PopUpStyles = styled.div `
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding:50px;
    z-index:1000;
    width: ${props =>props.width}
  
    `
const OverlayStyles =styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index:1000;
`
const CloseIcon = styled(AiOutlineClose)`
    //margin-right: 10px;
    cursor: pointer;
  left: 98%;
  position: relative;
  font-size: 1.5rem;
`
export default PopUpPage;