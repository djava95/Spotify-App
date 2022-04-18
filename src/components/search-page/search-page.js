import { React, useEffect } from 'react';
import useCurrentToken from '../../services/auth/token-extract.js';
import Header from '../header/header';
import SearchField from '../forms/search-field.js';
import ArtistsInfo from './artists-info';
import './search-page.scss';


export default function SearchPage() {

    let token = useCurrentToken();

    useEffect(() => {
        if (token) {
            window.localStorage.setItem('token', token);
        }
    }, []);

    window.location.hash = '';

    return (
        <div className='search-page-main-container'>
            <Header>
                <SearchField />
            </Header>
            <ArtistsInfo />
        </div>
    )
}