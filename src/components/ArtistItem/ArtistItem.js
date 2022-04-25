import { React, useState } from 'react';
import { useDispatch} from "react-redux";
import  Modal  from '../Modal/Modal';
import { LoadArtistAlbums } from '../../services/actions/actions';
import StarRating from '../StarRating/StarRating';
import noImage from '../../assets/no-image.png';
import './ArtistItem.scss';

const ArtistItem = ({artist}) => {

  const dispatch = useDispatch();
  let [displayStatus, setDisplayStatus] = useState('');
   
  const handleArtistClick = () => {
    dispatch(LoadArtistAlbums(artist.id));
    setDisplayStatus('open');
  };

  const handleArtistClose = () => {
    setDisplayStatus('');
  }

  return (
    <div>
      <section onClick={handleArtistClick} key={artist.id} className="artist-info">
          <div className='artist-image-container' 
            style={{ backgroundImage: `url(${artist.images.length ? artist.images[1].url : noImage})`}}> 
          </div>
          <div className="info-list">
            <div className="artist-name">{artist.name ? artist.name : ''}</div>
              <div className="artist-popularity" title={ `${(artist.popularity/20).toFixed(1)} out of 5 stars` }>
                 Rating: {artist.popularity ? <StarRating rate={artist.popularity} /> : ''}
              </div>
              <div className="artist-followers-num"> Followers: {artist.followers ? artist.followers.total.toLocaleString('en-US') : ''}</div>
          </div>            
      </section>
      <Modal displayStatus={displayStatus} handleClick={handleArtistClose} />
    </div>
  )

}

export default ArtistItem;