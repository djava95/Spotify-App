import {React, useState} from 'react';
import avatarIcon from '../../assets/user-avatar.svg';
import './UserMenu.scss';

const UserMenu = ({handleClick}) => {
  let [open, setOpen] = useState(false);
  
  const handleToggle = () => {
    setOpen(!open);
  }

  return(
    <div className='user-menu-container'>
      <div className='user-info-container' onClick={handleToggle}>
        <div className='user-image-container'>
          <img src={avatarIcon} className='user-image' alt='user' />
        </div>
        <div className='user-name'>User Name</div>
      </div>
      {open ? <div className='menu-container'>
                <div className='log-out' onClick={handleClick}> Log out </div>
              </div> : ''}
    </div>
  )
}

export default UserMenu;