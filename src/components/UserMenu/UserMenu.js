import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import avatarIcon from '../../assets/user-avatar-32px.svg';
import expandArrow from '../../assets/expand-arrow.svg';
import './UserMenu.scss';

const UserMenu = ({handleClick}) => {
  const [open, setOpen] = useState(false);
  const userData = useSelector(state => state.user);
  const handleToggle = () => {
    setOpen(!open);
  }

  return(
    <div className='user-menu-container'>
      <div className='user-info-container' onClick={handleToggle}>
        <div className='user-image-container'
          style={{ backgroundImage: `url(${userData?.images?.[0]?.url || avatarIcon})`}}>   
        </div>
        <div className={open ? 'profile active': 'profile'}> Profile </div>
        <div className='arrow-contanier'>
          <img src={expandArrow} className={open? 'expand-arrow open':'expand-arrow'} alt='arrow' />  
        </div> 
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