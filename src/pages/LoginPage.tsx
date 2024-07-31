import React, { useState } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import AuthLayout from '../components/layout/AuthLayout';
import Button from '../components/commom/button/Button';
import { login } from '../services/user';
import { useNavigate } from 'react-router-dom';
import useAuthRedirect from '../hooks/useAuthRedirect';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate();
  useAuthRedirect();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.token);
      setError('');
      navigate('/');
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign In"
      description="Welcome to login"
      descText="Don't have an account?"
      linkText="Sign Up"
      linkUrl="/signup"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-pink-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember Me</span>
          </label>
          <a href="#" className="text-sm text-pink-500 hover:underline">Forgot Password?</a>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Error message */}
        <Button type="submit" isLoading={loading}>Sign In</Button>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
