import { React } from 'react';
import uuid from 'react-uuid';
import { useSelector } from "react-redux";
import Album from './album';

import './view-albums.scss';

export function ViewArtistAlbums({ handleClick }) {

    let albums = useSelector(state => state.albums);

    return (
        <section className='albums-main-cont'>
            <div className='albums-header-cont'>
                <h3 className='artist-name-cont'> {`Albums`}</h3>
                <button onClick={handleClick} className='close-btn'> &times; </button>
            </div>
            <div className='albums-cont'>
                {albums.map(item => <Album key={uuid()} imageUrl={item.images[1].url} name={item.name} releaseYear={item.release_date.substring(0, 4)} />)}
            </div>
        </section>
    )
}




