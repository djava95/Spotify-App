import {useState, useEffect} from 'react';

export default function useToken() {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    const hash = window.location.hash;
    const tokenFromLocalStorage = localStorage.getItem('token');

    if (tokenFromLocalStorage){
      setToken(tokenFromLocalStorage);
      return;
    }

    if (hash) {
      const tokenFromHash = new URLSearchParams(hash).get('#access_token');
      localStorage.setItem('token', tokenFromHash);
      window.location.hash = '';
      setToken(tokenFromHash);
    }
  },);
  
  return token;
}


