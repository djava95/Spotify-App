import { React, useState } from 'react';
import { useDispatch} from "react-redux";
import  Modal  from '../Modal/Modal';
import { LoadArtistAlbums, ClearAlbumsData } from '../../services/actions/actions';
import StarRating from '../StarRating/StarRating';
import noImage from '../../assets/no-image.png';
import './ArtistItem.scss';

const ArtistItem = ({artist}) => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState('');
   
  const handleArtistClick = () => {
    dispatch(LoadArtistAlbums(artist.id));
    setOpen('open');
  };

  const handleArtistClose = () => {
    setOpen('');
    dispatch(ClearAlbumsData());
  }

  return (
    <div>
      <section onClick={handleArtistClick} key={artist.id} className="artist-item-container">
          <div className='artist-image-container' 
            style={{ backgroundImage: `url(${artist.images.length ? artist.images[1].url : noImage})`}}> 
          </div>
          <div className="info-list">
            <div className="artist-name">{artist.name ? artist.name : ''}</div>
              <div className="artist-popularity" title={ `${(artist.popularity/20).toFixed(1)} out of 5 stars` }>
                 Rating: {artist.popularity ? <StarRating rate={artist.popularity} /> : ''}
              </div>
              <div className="artist-followers-num">
                 Followers: {artist.followers ? artist.followers.total.toLocaleString('en-US') : ''}
              </div>
          </div>            
      </section>
      <Modal open={open} handleClick={handleArtistClose} />
    </div>
  )
}

export default ArtistItem;