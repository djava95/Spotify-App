import {React} from "react";
import { AlbumsLoader } from '../Albums/AlbumsLoader';
import './Modal.scss';

const Modal = ({displayStatus, handleClick }) =>{

  return (
    <div className={`modal-container ${displayStatus}`} onClick={handleClick}>
      <div className='modal-content'>
        <AlbumsLoader />
      </div>
    </div>
  )
}

export default Modal;