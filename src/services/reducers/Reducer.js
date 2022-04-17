import { ARTIST_SEARCH, LOAD_ARTIST_ALBUMS, SUBMIT_ARTIST_SEARCH } from "../actions/action-types";

const defaultState = {
    artistData: {},
    submittedArtistData : null,
    albums: [],
}

export default function Reducer(state = defaultState, action) {
    switch (action.type) {
        case ARTIST_SEARCH :
            return {
                ...state,
                artistData: action.payload,
            }
        case SUBMIT_ARTIST_SEARCH :
            return {
                ...state,
                submittedArtistData : state.artistData,
            }    
        case LOAD_ARTIST_ALBUMS : 
            return {
                ...state,
                albums : action.payload,
            }    
        default:
            return state;
    }
}