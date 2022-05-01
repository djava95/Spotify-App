import {React, useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { GetUserData } from '../../services/actions/actions';
import SearchField from '../SearchField/SearchField';
import UserMenu from '../UserMenu/UserMenu';
import logo from '../../assets/Spotify_Logo_RGB_White.png';
import './Header.scss';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  
  const handleLogOut = () => {
    localStorage.removeItem('token');  
    navigate('/');
  };

  useEffect(()=>{
    if (token) {
      dispatch(GetUserData());
    }
  },[token]);

  return (
    <header className='header-main-container'>
      <div className='header-content-wrapper'>
        <div className='header-logo-cont'>
          <img className='header-logo' src={logo} alt='logo' />
        </div>
        {token ? (
          <>
            <SearchField />
            <UserMenu handleLogOut={handleLogOut}/>
          </>
        ) : '' }
      </div>
    </header>
  )
}