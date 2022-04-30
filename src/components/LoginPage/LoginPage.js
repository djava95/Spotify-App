import { React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import useTokenfromHash from '../../services/hooks/useTokenFromHash';
import loginSpotify from '../../services/auth/loginSpotify';
import Button from '../Button/Button';
import './LoginPage.scss';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    loginSpotify();
  };

  const token = useTokenfromHash();
  
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
    if (localStorage.getItem('token')) {
      navigate('/search-page')
    }
  },[]);

  window.location.hash = '';

  return (
    <div className='login-page-main-container'>
      <div className='button-container'>
       <Button content={'Login with Spotify'} handleClick={handleLogin} /> 
      </div>
    </div>
  )
}


