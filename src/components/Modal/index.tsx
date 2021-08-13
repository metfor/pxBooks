import Modal from "react-modal";

import {  ReactNode } from "react";

interface NewModalProps{
    isOpen:boolean;
    onRequestClose:() => void;
    children:ReactNode;
}
export function NewModal({isOpen,onRequestClose,children}:NewModalProps){
    return(
      
        <Modal
        isOpen={isOpen}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button  onClick={onRequestClose} className="react-modal-closed">
          X
        </button>
        {children}
      </Modal>
     
        
    )
}