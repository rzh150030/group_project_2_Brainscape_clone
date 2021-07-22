import {useState, useEffect} from "react"
import ReactDOM  from "react-dom";
import { useModal } from "../../context/Modal";

export const Modal = ({ onClose, children }) => {

  const ModalNode = useModal();

  if (!ModalNode) return null;


  return (ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">{children}</div>
    </div>,
    ModalNode
  ))
};

export default Modal;
