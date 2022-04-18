import { React } from 'react';
import { handleLogin } from '../../services/auth/login-spotify';
import Button from '../buttons/button';
import './login-page.scss';

export default function LoginPage() {
    

    return (
        <div className='main-container'>
            <div className='button-container'>
                <Button content={'Login with Spotify'} handleClick={handleLogin} />
            </div>
        </div>
    )
}


