import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/commom/button/Button';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;
