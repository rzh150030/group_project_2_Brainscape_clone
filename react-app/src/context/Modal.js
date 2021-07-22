import { createContext, useRef, useEffect, useState, useContext } from "react";
import './Modal.css'
export const ModalContext = createContext();

export const useModal = () => useContext(ModalContext)


export const ModalProvider = ({ children }) => {
  const ModalRef = useRef();
  const [value, setValue] = useState();
  useEffect(()=>{
    setValue(ModalRef.current)
  },[])
  return (
    <ModalContext.Provider value={value}>
      {children}
      <div ref={ModalRef}></div>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
