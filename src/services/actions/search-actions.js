import axios from 'axios';
import { ARTIST_SEARCH, LOAD_ARTIST_ALBUMS } from './action-types';



export const SearchPerName = (inputValue, token) => async (dispatch) => {

    const resp = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(inputValue)}&type=artist`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    let artists = await resp.data.artists.items;
    
    dispatch({
        type: ARTIST_SEARCH,
        payload: artists
    })
}


export const LoadArtistAlbums = (artistId,token) => async (dispatch) => {

    const resp = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=ES&limit=50&offset=0`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    let albums = await resp.data.items;
    
    dispatch({
        type: LOAD_ARTIST_ALBUMS,
        payload : albums,
    })
}