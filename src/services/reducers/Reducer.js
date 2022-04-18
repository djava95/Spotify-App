import { ARTIST_SEARCH, LOAD_ARTIST_ALBUMS} from "../actions/action-types";

const defaultState = {
    noInputAfterLoad : true,
    artists: [],
    submittedArtistData : null,
    albums: [],
}

export default function Reducer(state = defaultState, action) {
    switch (action.type) {

        case ARTIST_SEARCH :
            return {
                ...state,
                artists: action.payload,
                noInputAfterLoad : false,
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