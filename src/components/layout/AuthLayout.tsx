import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  descText:string;
  linkText: string;
  linkUrl: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, description,descText, linkText, linkUrl }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg">
        <div className="w-full md:w-1/2 bg-white p-8">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          {children}
        </div>
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-pink-500 to-red-500 p-8 text-white flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4">{description}</h2>
          <p className="mb-4">{descText}</p>
          <Link to={linkUrl}>
            <button className="py-2 px-4 bg-white text-pink-500 font-semibold rounded-md shadow-md hover:bg-gray-100">
              {linkText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
