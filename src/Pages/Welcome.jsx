import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Welcome = () => {
  const navigate = useNavigate();
  return (
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-between py-10">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">
        </p>
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded mb-4"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
         className="w-full bg-purple-100 text-purple-700 font-semibold py-2 rounded"
        >
          Already Registered? Login
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Welcome;
