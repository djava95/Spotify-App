import { React } from 'react';
import './Album.scss';

const Album = ({ imageUrl, name, releaseYear }) => {
  return (
   <div className='album-container'>
     <div className='album-image-container'
        style={{ backgroundImage: `url(${imageUrl})`}}>
     </div>
     <div className='album-info'>
       <div>{name}</div>
       <div>{releaseYear}</div>
     </div>
   </div>
  )
}

export default Album;