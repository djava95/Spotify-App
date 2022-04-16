import { React } from 'react';

import LandingPageLink from './landing-page-link';
import SearchField from './search-field';
import logo from '../../assets/Spotify_Logo_RGB_White.png';
import './nav-bar.scss';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <div className='nav-bar-logo-cont'>
                <img className='nav-bar-logo' src={logo} alt='logo' />
            </div>
            <SearchField />
            <LandingPageLink />
        </nav>
    )
}