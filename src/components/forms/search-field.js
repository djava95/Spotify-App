import { React } from 'react';
import { useDispatch } from "react-redux";
import { SearchPerName } from '../../services/actions/search-actions';

import './search-field.scss';

export default function SearchField() {

    let dispatch = useDispatch();

    let token = window.localStorage.getItem('token');

    const handleChange = (e) => {
        dispatch(SearchPerName(e.target.value, token));
    };

    return (
        <div className='srch-field-container'>
            <input className='search-field'
                type="search"
                placeholder='Search for an artist...'
                onChange={handleChange}
            />
        </div>
    )
}