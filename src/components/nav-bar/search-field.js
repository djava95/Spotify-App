import { React } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useCurrentToken from '../../services/auth/token-extract';
import { SearchPerName, SubmitArtistSearch } from '../../services/actions/search-actions';

import './search-field.scss';

export default function SearchField() {

    let dispatch = useDispatch();
    let artistData = useSelector(state => state.artistData);

    let token = useCurrentToken();

    const handleChange = (e) => {
        dispatch(SearchPerName(e.target.value, token));
    };


    const handleSubmit = () => {
        dispatch(SubmitArtistSearch());
    };


    return (
        <div className='srch-field-container'>
            <input className='search-field' type="search" placeholder='Search for an artist...' onChange={handleChange} onKeyDown={(event) => {
                if (event.code === "Enter")
                    handleSubmit();
            }} />
        </div>
    )
}