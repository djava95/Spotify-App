import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import useCurrentToken from '../../services/auth/token-extract';
import { LoadArtistAlbums } from '../../services/actions/search-actions';
import { ViewArtistAlbums } from '../Albums/view-albums';
import StarRating from "../../utils/star-rating";
import './artist-info.scss';

const ArtistInfo = () => {

    const dispatch = useDispatch();
    let token = useCurrentToken();
    const [open, setOpen] = useState(false);
    let updArtistData = useSelector(state => state.submittedArtistData);

    const handleClick = () => {
        dispatch(LoadArtistAlbums(updArtistData.id,token));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    if (updArtistData) {
        return (
            <div className="artist-info-main-cont">
                <section className="artist-info">
                    <img onClick={handleClick} src={updArtistData.images.length ? updArtistData.images[1].url : ''} className='artist-image' alt="artist" />
                    <ul className="info-list">
                        <li className="artist-name">{updArtistData.name ? updArtistData.name : ''}</li>
                        <li className="artist-popularity"> Rating: {updArtistData.popularity ? <StarRating rate={updArtistData.popularity} /> : ''}</li>
                        <li className="artist-followers-num"> Followers: {updArtistData.followers ? updArtistData.followers.total.toLocaleString('en-US') : ''}</li>
                    </ul>
                    <Modal className='modal-cont' open={open} onClose={handleClose}>
                        <ViewArtistAlbums handleClick={handleClose}/>
                    </Modal>
                </section>
            </div>
        )
    }
    else if (updArtistData === undefined) {
        return (
            <p className="no-matches-message"> No Matches :( </p>
        )
    }
}

export default ArtistInfo;