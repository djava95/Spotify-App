import { React } from 'react';

import logo from '../../assets/Spotify_Logo_RGB_White.png';
import './header.scss';

export default function Header({children}) {
    return (
        <header className='header'>
            <div className='header-logo-cont'>
                <img className='header-logo' src={logo} alt='logo' />
            </div>
            {children}
        </header>
    )
}