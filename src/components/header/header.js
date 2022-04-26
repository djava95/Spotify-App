import { React, useState, useEffect} from 'react';
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
  let [token, setToken] = useState('');
  
  const handleLogOut = () => {
    localStorage.setItem('token', '');
    navigate('/');
  };

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      dispatch(GetUserData());
    }
  },);

  return (
    <header className = 'header-main-container'>
      <div className='header-content-wrapper'>
        <div className = 'header-logo-cont'>
          <img className = 'header-logo' src={logo} alt='logo' />
        </div>
        {token ? <SearchField /> : '' }
        {token ? <UserMenu handleClick={handleLogOut}/> : '' }
      </div>
    </header>
  )
}