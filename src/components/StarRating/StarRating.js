import { React } from 'react';
import StarIcon from './StarIcon';
import './StarRating.scss';

const stars = [1, 2, 3, 4, 5];

const StarRating = ({ rate }) => {
  const isFilled = (star) => Math.round(rate/20) >= star;
  
  return (
    <div className='star-rating-container'>
      {stars.map(star => <StarIcon key={star} filled={isFilled(star)}/>)}
    </div>
  )
}

export default StarRating;