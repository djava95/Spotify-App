import {React} from 'react';
import { Link } from '@mui/material';
import Logo from '../../assets/Spotify_Logo_RGB_White.png';
import InstagramIcon from '../../assets/footer_instagram.svg';
import TwitterIcon from '../../assets/footer_twitter.svg';
import FacebookIcon from '../../assets/footer_facebook.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='page-footer-container'>
      <div className='page-footer-main-content'>
        <div className='logo-container'>
          <Link to={'/'}> <img src={Logo} alt='logo' className='footer-logo'/></Link>
        </div>
        <div className='top-links-container'>
          <div>
            <h4>COMPANY</h4>
            <ul className='company'>  
              <li><Link to={'/'} className='footer-link'> About</Link></li>
              <li><Link to={'/'} className='footer-link'> Jobs</Link></li>
              <li><Link to={'/'} className='footer-link'> For the Record</Link></li>
            </ul>
          </div>
          <div>
            <h4>COMMUNITIES</h4>
            <ul className='communities'>
              <li><Link to={'/'} className='footer-link'> For Artists</Link></li>
              <li><Link to={'/'} className='footer-link'> Developers</Link></li>
              <li><Link to={'/'} className='footer-link'> Advertising</Link></li>
              <li><Link to={'/'} className='footer-link'> Investors</Link></li>
              <li><Link to={'/'} className='footer-link'> Vendors</Link></li>
            </ul>
          </div>
         <div>
          <h4>USEFUL LINKS</h4>
          <ul className='useful-links'>  
            <li><Link to={'/'} className='footer-link'> Support</Link></li>
            <li><Link to={'/'} className='footer-link'> Web Player</Link></li>
            <li><Link to={'/'} className='footer-link'> Free Mobile App</Link></li>
          </ul>
        </div>
        </div>
        <div className='sm-links-container'>
          <ul>
            <li><Link to={'/'}><span><img src={InstagramIcon} alt='instagram' className='sm-link-icon'/> </span></Link></li>
            <li><Link to={'/'}><span><img src={TwitterIcon} alt='twitter' className='sm-link-icon'/></span></Link></li>
            <li><Link to={'/'}><span><img src={FacebookIcon} alt='facebook' className='sm-link-icon'/></span></Link></li>
          </ul>
        </div>  
      </div>
      <div className='bottom-links-container'>
          <ul>
            <li><Link to={'/'} className='footer-link'> Legal</Link></li>
            <li><Link to={'/'} className='footer-link'> Privacy Center</Link></li>
            <li><Link to={'/'} className='footer-link'> Privacy Policy</Link></li>
            <li><Link to={'/'} className='footer-link'> Cookies</Link></li>
            <li><Link to={'/'} className='footer-link'> About Ads</Link></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer;