import { React } from 'react';
import starIcon from '../../assets/black-star-icon.svg';
import './StarRating.scss';

const stars = [1, 2, 3, 4, 5];

const StarIcon = ({color}) => {
  return (
    <img src={starIcon} alt='star icon' className= {`star-icon ${color}`}/>
  )
};

const StarRating = ({ rate }) => {
  return (
    <div className='star-rating-container'>
      {stars.map(star => <StarIcon key={star} color={Math.round(rate/20) >= star ? 'white' : '' }/> )}
    </div>
  )

}

export default StarRating;