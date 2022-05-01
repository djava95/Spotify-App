import {React} from 'react';
import { ReactComponent as Icon } from '../../assets/black-star-icon-32px.svg';
import './StarIcon.scss';

const StarIcon = ({filled}) => {
  return (
    <span className='star-icon-container'>
      <Icon className= {`star-icon ${filled ? 'filled' : ''}`} />
    </span>
  )
};

export default StarIcon;