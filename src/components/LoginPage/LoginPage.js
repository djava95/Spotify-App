import { React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import useToken from '../../services/hooks/useToken';
import loginSpotify from '../../services/auth/loginSpotify';
import Button from '../Button/Button';
import './LoginPage.scss';

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    loginSpotify();
  };

  const token = useToken();
  
  useEffect(() => {
    if (token) {
      navigate('/search-page'); 
    }
  },[token]);

  return (
    <div className='login-page-main-container'>
      <div className='button-container'>
       <Button content={'Login with Spotify'} handleClick={handleLogin} /> 
      </div>
    </div>
  )
}


