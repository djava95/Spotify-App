import axios from 'axios';
import {ARTIST_SEARCH, LOAD_ARTIST_ALBUMS,  CLEAR_SEARCH_RESULTS } from './action-types';

let token = localStorage.getItem('token');

export const SearchByName = (inputValue) => async (dispatch) => {
  const res = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(inputValue)}&type=artist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const artists = await res.data.artists.items;
  dispatch({
    type: ARTIST_SEARCH,
    payload: artists
  })  
}

export const LoadArtistAlbums = (artistId) => async (dispatch) => {
  const res = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=ES&limit=50&offset=0`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const albums = await res.data.items;  
  dispatch({
    type: LOAD_ARTIST_ALBUMS,
    payload : albums,
  })
}

export const ClearSearchResults =  ()  => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  }
}