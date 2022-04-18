import { React, useState } from 'react';
import { useDispatch} from "react-redux";
import Modal from '@mui/material/Modal';
import { LoadArtistAlbums } from '../../services/actions/search-actions';
import { ViewArtistAlbums } from '../Albums/view-albums';
import StarRating from "../../utils/star-rating";
import './artist-info.scss';

const ArtistItem = ({artist}) => {

    const dispatch = useDispatch();
    let token = window.localStorage.getItem('token');

    const [open, setOpen] = useState(false);
   
    const handleClick = () => {
        dispatch(LoadArtistAlbums(artist.id,token));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <section key={artist.id} className="artist-info">
            <img onClick={handleClick} src={artist.images.length ? artist.images[1].url : ''} className='artist-image' alt="artist" />
            <ul className="info-list">
                <li className="artist-name">{artist.name ? artist.name : ''}</li>
                <li className="artist-popularity"> Rating: {artist.popularity ? <StarRating rate={artist.popularity} /> : ''}</li>
                <li className="artist-followers-num"> Followers: {artist.followers ? artist.followers.total.toLocaleString('en-US') : ''}</li>
            </ul>
            <Modal className='modal-cont' open={open} onClose={handleClose}>
                <ViewArtistAlbums handleClick={handleClose} />
            </Modal>
        </section>
    )

}

export default ArtistItem;