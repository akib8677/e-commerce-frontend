import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect to home or dashboard if the user is already logged in
      navigate('/');
    }
  }, [navigate]);
};

export default useAuthRedirect;
