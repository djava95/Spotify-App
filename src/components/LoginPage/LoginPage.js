import { React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import useCurrentToken from '../../services/hooks/useCurrentToken';
import loginSpotify from '../../services/auth/loginSpotify';
import Button from '../Button/Button';
import './LoginPage.scss';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    loginSpotify();
  }
  
  let token = useCurrentToken();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, []);

  window.location.hash = '';

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      navigate('/search-page')
    }
  },[]);

  return (
    <div className='login-page-main-container'>
      <div className='button-container'>
       <Button content={'Login with Spotify'} handleClick={handleLogin} /> 
      </div>
    </div>
  )
}

