import { React } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import Header from './components/Header/Header.js';
import LoginPage from './components/LoginPage/LoginPage.js';
import SearchPage from './components/SearchPage/SearchPage.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';

export default function App() {
  return (
    <div className="app-main-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/search-page' element={<PrivateRoute> <SearchPage /> </PrivateRoute> }/>  
          <Route path='*' element ={ <Navigate to= '/'/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


