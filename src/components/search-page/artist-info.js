import { React, useEffect, useState } from "react";
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
    let [artistData, setArtistData] = useState();
    const [open, setOpen] = useState(false);
    let updArtistdata = useSelector(state => state.submittedArtistdata);

    useEffect(() => {
        setArtistData(updArtistdata);
    }, [updArtistdata]);

    const handleClick = () => {
        dispatch(LoadArtistAlbums(updArtistdata.id,token));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    if (artistData) {
        return (
            <div className="artist-info-main-cont">
                <section className="artist-info">
                    <img onClick={handleClick} src={artistData.images.length ? artistData.images[1].url : ''} className='artist-image' alt="artist" />
                    <ul className="info-list">
                        <li className="artist-name">{artistData.name ? artistData.name : ''}</li>
                        <li className="artist-popularity"> Rating: {artistData.popularity ? <StarRating rate={artistData.popularity} /> : ''}</li>
                        <li className="artist-followers-num"> Followers: {artistData.followers ? artistData.followers.total.toLocaleString('en-US') : ''}</li>
                    </ul>
                    <Modal className='modal-cont' open={open} onClose={handleClose}>
                        <ViewArtistAlbums />
                    </Modal>
                </section>
            </div>
        )
    }
    else if (artistData === undefined) {
        return (
            <p className="no-matches-message"> No Matches :( </p>
        )
    }
}

export default ArtistInfo;