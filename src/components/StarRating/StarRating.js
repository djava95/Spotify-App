import { React } from 'react';
import StarIcon from './StarIcon';
import './StarRating.scss';

const stars = [1, 2, 3, 4, 5];

const StarRating = ({ rate }) => {
  return (
    <div className='star-rating-container'>
      {stars.map(star => <StarIcon key={star} filled={Math.round(rate/20) >= star ? true : false }/> )}
    </div>
  )
}

export default StarRating;