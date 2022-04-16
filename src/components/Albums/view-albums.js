import { React } from 'react';
import uuid from 'react-uuid';
import { useSelector } from "react-redux";
import Album from './album';

import './view-albums.scss';

export function ViewArtistAlbums() {

    let albums = useSelector(state => state.albums);

    return (
        <div className='albums-main-cont'>
            {albums.map(item => <Album key={uuid()} imageUrl={item.images[1].url} name={item.name} releaseYear={item.release_date.substring(0, 4)} />)}
        </div>
    )
}




