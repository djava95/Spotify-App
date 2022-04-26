import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import avatarIcon from '../../assets/user-avatar.svg';
import './UserMenu.scss';

const UserMenu = ({handleClick}) => {
  let [open, setOpen] = useState(false);
  let userData = useSelector(state => state.user);
  const handleToggle = () => {
    setOpen(!open);
  }

  return(
    <div className='user-menu-container'>
      <div className='user-info-container' onClick={handleToggle}>
        <div className='user-image-container'
         style={{ backgroundImage: `url(${userData !== null ? (userData.images.length ? userData.images[0].url: avatarIcon) : avatarIcon})`}}> 
        </div>
        <div className={open ? 'profile active': 'profile'}> Profile </div>
      </div>
      {open ? <div className='menu-container'>
                <div className='user-name'> {userData !== null ? userData.display_name : 'User Name'} </div>
                  <div className='user-menu-actions'>
                    <div className='log-out' onClick={handleClick}> Log out </div>
                  </div>
              </div> : ''}
    </div>
  )
}

export default UserMenu;