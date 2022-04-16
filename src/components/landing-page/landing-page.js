import { React } from 'react';
import { Link } from 'react-router-dom';
import {handleLogin} from '../../services/auth/login-spotify';
import LoginButton from './login-button';
import logo from '../../assets/Spotify_Logo_RGB_White.png';
import './landing-page.scss';

export default function LandingPage() {
    return (
        <div className='main-container'>
            <header className='header'>
                <img className='header-logo' src={logo} alt='logo' />
            </header>
            <div className='button-container'>
                <Link to={'/search-page'}>
                    <LoginButton handleLogin={handleLogin} />
                </Link>
            </div>
        </div>
    )
}


