import axios from 'axios';
import { ARTIST_SEARCH, SUBMIT_ARTIST_SEARCH, LOAD_ARTIST_ALBUMS } from './action-types';



export const SearchPerName = (inputValue, token) => async (dispatch) => {

    const resp = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(inputValue)}&type=artist`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    let respData = await resp.data.artists.items;
    let artistData = await respData[0];

    dispatch({
        type: ARTIST_SEARCH,
        payload: artistData
    })
}

export const SubmitArtistSearch = () => (dispatch) => {
    dispatch({
        type: SUBMIT_ARTIST_SEARCH,
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