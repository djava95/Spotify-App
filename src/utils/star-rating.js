import { Rating } from 'react-simple-star-rating';
import './star-rating.scss';

export default function StarRating({ rate }) {

        
    return (<Rating 
        ratingValue={rate}
        readonly={true}
        className='artist-rating'
        fillColor='White'
        emptyColor='black' 
        size={20}
        />     
    );

}