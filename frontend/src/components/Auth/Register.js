import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      // Handle successful registration (e.g., redirect to login)
    } catch (err) {
      console.error('Error registering:', err);
      setError('Registration failed. Please try again.');
      // More detailed error logging
      if (err.response) {
        console.error('Response error data:', err.response.data);
        console.error('Response status:', err.response.status);
      } else if (err.request) {
        console.error('Request error:', err.request);
      } else {
        console.error('General error:', err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
