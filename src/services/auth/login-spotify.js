
const client_id = '7d020a9fe91f4e9da397900ca6fb5787';

let redirect_uri = 'http://localhost:3000/search-page';

let url  =  'https://accounts.spotify.com/authorize';

url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

export function handleLogin () {
    window.location = url;
};