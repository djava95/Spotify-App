import axios from 'axios';
import {GET_USER_DATA, ARTIST_SEARCH, LOAD_ARTIST_ALBUMS,  CLEAR_SEARCH_RESULTS, CLEAR_ALBUMS_DATA } from './action-types';

export const GetUserData = () => async (dispatch) => {
  const res = await axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });
  const user = await res.data;
  dispatch({
    type : GET_USER_DATA,
    payload : user
  })
};

export const SearchByName = (inputValue) => async (dispatch) => {
  const res = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(inputValue)}&type=artist`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });
  const artists = await res.data.artists.items;
  dispatch({
    type: ARTIST_SEARCH,
    payload: artists
  })  
};

export const LoadArtistAlbums = (artistId) => async (dispatch) => {
  const res = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=ES&limit=50&offset=0`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  });
  const albums = await res.data.items;  
  dispatch({
    type: LOAD_ARTIST_ALBUMS,
    payload : albums,
  })
};

export const ClearSearchResults =  ()  => {
  return {
    type: CLEAR_SEARCH_RESULTS,
  }
};

export const ClearAlbumsData =  ()  => {
  return {
    type: CLEAR_ALBUMS_DATA,
  }
};