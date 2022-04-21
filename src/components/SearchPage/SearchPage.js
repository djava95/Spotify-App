import { React, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import ArtistsInfo from '../ArtistsInfo/ArtistsInfo';
import './SearchPage.scss';

export default function SearchPage() {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  
  useEffect(()=>{
    if (!token) {
      navigate('/');
    }
  },[]);
  
  return (
    <div className='search-page-main-container'>
      <ArtistsInfo />
    </div>
  )
}