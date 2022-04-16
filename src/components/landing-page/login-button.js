import { React } from 'react';

import './login-button.scss'

export default function LoginButton({handleLogin}) {

    return(
        <button className='login-button' onClick={handleLogin}> Login with Spotify </button>
    )
}