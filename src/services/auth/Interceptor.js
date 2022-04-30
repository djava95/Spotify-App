import axios from 'axios';

const Interceptor = ()=> axios.interceptors.response.use( 
  response => {
    return response
  }, 
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location = '/'; 
    } 
  }
);

export default Interceptor;