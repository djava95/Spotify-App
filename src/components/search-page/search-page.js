import { React } from 'react';
import NavBar from '../nav-bar/nav-bar';
import ArtistInfo from './artist-info';
import './search-page.scss';


export default function SearchPage() {

    return (
        <div className='search-page-main-container'>
            <NavBar />
            <ArtistInfo />
        </div>
    )
}