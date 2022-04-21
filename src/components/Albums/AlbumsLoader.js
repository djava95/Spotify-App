import { React } from 'react';
import { useSelector } from "react-redux";
import Album from './Album';

import './AlbumsLoader.scss';

export function AlbumsLoader () {

  let albums = useSelector(state => state.albums);

  return (
    <section className='albums-main-container'>
      <div className='albums-header-container'>
        <h3 className='header'> Albums </h3>
      </div>
      <div className='albums-container'>
        {albums.map(item => <Album key={item.id} imageUrl={item.images[1].url} name={item.name} releaseYear={item.release_date.substring(0, 4)} />)}
      </div>
    </section>
  )
}




