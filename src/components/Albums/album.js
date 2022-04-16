import { React } from 'react';
import './album.scss';

const Album = ({ imageUrl, name, releaseYear }) => {
    return (
        <div className='album-cont'>
            <img className='album-image'  src={imageUrl} alt={name} />
            <ul className='album-info'>
                <li>{name}</li>
                <li>{releaseYear}</li>
            </ul>
        </div>
    )
}

export default Album;