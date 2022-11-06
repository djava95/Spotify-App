const client_id = '7d020a9fe91f4e9da397900ca6fb5787';
let redirect_uri = process.env.REACT_APP_BASE_URL;  // must be registered in Spotify developer dashboard settings 
let endPoint  =  'https://accounts.spotify.com/authorize';
let url = `${endPoint}?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`;

export default function loginSpotify () {
  window.location = url;
}