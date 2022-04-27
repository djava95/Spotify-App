import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  useEffect(()=>{
    if (!token || token === null) {
      navigate('/');
    }
  },[]);

  return (
    children
  )
}



export default ProtectedRoute;