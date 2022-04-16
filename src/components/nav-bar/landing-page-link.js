import { React } from 'react';
import { Link } from 'react-router-dom';

import './landing-page-link.scss';

export default function LandingPageLink() {

    return (
        <div className='landing-page-link-cont' >
            <Link to='/' className='landing-page-link'> Home page</Link>
        </div>
    )
}