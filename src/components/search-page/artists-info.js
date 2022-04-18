import { React} from "react";
import { useSelector } from "react-redux";
import ArtistItem from "./artist-item";
import './artist-info.scss';

const ArtistsInfo = () => {
    
    let artists = useSelector(state => state.artists);
    let noInputAfterLoad = useSelector(state => state.noInputAfterLoad);
    console.log(artists.length);

    if (artists.length !==0) {
        return (
            <div className="artist-info-main-cont">

               {artists.map(artist => <ArtistItem  artist={artist}/>)}
                
            </div>
        )
    }
    else if ( !noInputAfterLoad && artists.length === 0) {
        return (
            <p className="no-matches-message"> No Matches :( </p>
        )
    }
}

export default ArtistsInfo;