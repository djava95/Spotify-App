import {ARTIST_SEARCH, LOAD_ARTIST_ALBUMS, CLEAR_SEARCH_RESULTS} from "../actions/action-types";

const defaultState = {
  artists: null, 
  albums: [],
}

export default function Reducer(state = defaultState, action) {
  switch (action.type) {
    case ARTIST_SEARCH :
      return {
        ...state,
        artists: action.payload,
      }                
    case LOAD_ARTIST_ALBUMS : 
      return {
        ...state,
        albums : action.payload,
      }    
    case CLEAR_SEARCH_RESULTS : 
      return {
        ...state,
        artists : null,
      }
      default:
      return state;
    }
   
}