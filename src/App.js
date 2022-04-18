import { React } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/login-page/login-page.js';
import SearchPage from './components/search-page/search-page.js';
import './App.scss';

export default function App() {

  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/search-page' element={<SearchPage />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


