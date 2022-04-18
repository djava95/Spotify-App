const client_id = '7d020a9fe91f4e9da397900ca6fb5787';

let redirect_uri = 'http://localhost:3000/search-page';

let endPoint  =  'https://accounts.spotify.com/authorize';

let url = `${endPoint}?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}`;

export function handleLogin () {
    window.location = url; 
};
