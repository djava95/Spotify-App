import { React, useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { SearchByName, ClearSearchResults } from '../../services/actions/actions';

import './SearchField.scss';

export default function SearchField() {
  const dispatch = useDispatch();
  let [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect (()=> {
    if (value === ''){
      dispatch(ClearSearchResults());
    }

    else { 
      const sendRequest = setTimeout(() => dispatch(SearchByName(value)), 700);
      return () => {
        clearTimeout(sendRequest);
      } 
    } 
      
  },[value, dispatch]);

  return (
    <div className='search-field-container'>
        <input className='search-field'
          type="search"
          placeholder='Search for an artist...'
          value={value}
          onChange={handleChange}
        />
    </div>
  )
}