import {React, useEffect} from "react";
import { AlbumsLoader } from '../Albums/AlbumsLoader';
import './Modal.scss';

const Modal = ({displayStatus, handleClick }) =>{
  useEffect(()=>{
    if (displayStatus) {
      document.body.style.overflow = 'hidden';
    } 
    else {
      document.body.style.overflow = 'unset';
    }
  },[displayStatus]);
  
  return (
    <div className={`modal-container ${displayStatus}`} onClick={handleClick}>
      <div className='modal-content'>
        <AlbumsLoader />
      </div>
    </div>
  )
}

export default Modal;