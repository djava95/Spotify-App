import {GET_USER_DATA, ARTIST_SEARCH, LOAD_ARTIST_ALBUMS, CLEAR_SEARCH_RESULTS, CLEAR_ALBUMS_DATA, ALBUMS_LOADING} from "../actions/action-types";

const defaultState = {
  user : null,
  artists: null,
  albumsLoading: false, 
  albums: null,
}

export default function Reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_DATA :
      return {
        ...state,
        user: action.payload,
      }
    case ARTIST_SEARCH :
      return {
        ...state,
        artists: action.payload,
      }
    case ALBUMS_LOADING : 
      return {
        ...state,
        albumsLoading: action.payload
      }  
    case LOAD_ARTIST_ALBUMS : 
      return {
        ...state,
        albums: action.payload,
        albumsLoading: false,
      }    
    case CLEAR_SEARCH_RESULTS : 
      return {
        ...state,
        artists: null,
      }
    case CLEAR_ALBUMS_DATA : 
      return {
        ...state,
        albums: null,
        albumsLoading: false,
      }  
    default:
    return state;
  } 
}