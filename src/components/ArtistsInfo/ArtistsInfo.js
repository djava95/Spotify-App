import { React} from "react";
import { useSelector } from "react-redux";
import ArtistItem from "../ArtistItem/ArtistItem";
import './ArtistsInfo.scss';

const ArtistsInfo = () => {
    
  let artists = useSelector(state => state.artists);
  

  if (artists === null) {
    return 
  }
  if (artists.length === 0) {
    return (
      <p className="no-matches-message"> No Matches :( </p>
    )
  }
  if (artists) {
    return (
      <div className="artist-info-main-cont">
        {artists.map(artist => <ArtistItem key={artist.id} artist={artist}/>)}                
      </div>
    )
  }
}

export default ArtistsInfo;