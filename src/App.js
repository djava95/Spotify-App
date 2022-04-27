import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import axios from 'axios';
import Header from './components/Header/Header.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import SearchPage from './components/SearchPage/SearchPage.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';

axios.interceptors.response.use( 
  response => {
    return response
  }, 
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/'; 
    } 
  }
)

export default function App() {
  return (
    <div className="app-main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/search-page' element={ <SearchPage /> } />  
          <Route path='*' element ={ <Navigate to= '/'/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


