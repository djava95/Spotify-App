const client_id = '7d020a9fe91f4e9da397900ca6fb5787';
let redirect_uri = 'http://localhost:3000';
let endPoint  =  'https://accounts.spotify.com/authorize';
let url = `${endPoint}?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`;

export default function loginSpotify () {
  window.location = url;
}