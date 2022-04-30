import {React, useEffect} from "react";
import { AlbumsLoader } from '../Albums/AlbumsLoader';
import './Modal.scss';

const Modal = ({open, handleClick }) =>{
  useEffect(()=>{
    if (open) {
      document.body.style.overflow = 'hidden';
    } 
    else {
      document.body.style.overflow = 'unset';
    }
  },[open]);
  
  if (open) {
    return (
      <div className={`modal-container`} onClick={handleClick}>
        <div className='modal-content'>
          <AlbumsLoader />
        </div>
      </div>
    )
  }
}

export default Modal;