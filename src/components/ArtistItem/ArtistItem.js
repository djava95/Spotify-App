import { React, useState,Fragment } from 'react';
import { useDispatch} from "react-redux";
import  Modal  from '../Modal/Modal';
import { LoadArtistAlbums, ClearAlbumsData } from '../../services/actions/actions';
import StarRating from '../StarRating/StarRating';
import noImage from '../../assets/no-image.png';
import './ArtistItem.scss';

const ArtistItem = ({artist}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const getArtistRating = () => (artist.popularity/20).toFixed(1);
  
  const handleArtistClick = () => {
    dispatch(LoadArtistAlbums(artist.id));
    setOpen(true);
  };

  const handleArtistClose = () => {
    setOpen(false);
    dispatch(ClearAlbumsData());
  }
  
  return (
    <Fragment>
      <section onClick={handleArtistClick} key={artist.id} className="artist-item-container">
          <div className='artist-image-container' 
            style={{ backgroundImage: `url(${artist.images.length ? artist.images[1].url : noImage})`}}> 
          </div>
          <div className="info-list">
            <div className="artist-name">{artist.name ? artist.name : ''}</div>
              <div className="artist-popularity" title={ `${getArtistRating()} out of 5 stars` }>
                 Rating: {artist.popularity ? <StarRating rate={artist.popularity} /> : ''}
              </div>
              <div className="artist-followers-num">
                 Followers: {artist.followers ? artist.followers.total.toLocaleString('en-US') : ''}
              </div>
          </div>            
      </section>
      <Modal open={open} handleClick={handleArtistClose} />
    </Fragment>
  )
}

export default ArtistItem;