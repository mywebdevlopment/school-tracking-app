//// src/components/Auth/Login.js
//import React, { useState } from 'react';
//import axios from 'axios';
//
//function Login() {
//  const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    try {
//      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
//      console.log('Login successful:', response.data);
//    } catch (error) {
//      console.error('Error logging in:', error);
//    }
//  };
//
//  return (
//    <div className="p-4 max-w-md mx-auto">
//      <h2 className="text-2xl font-bold mb-4">Login</h2>
//      <form onSubmit={handleSubmit} className="space-y-4">
//        <div>
//          <label htmlFor="email" className="block text-gray-700">Email</label>
//          <input
//            type="email"
//            id="email"
//            value={email}
//            onChange={(e) => setEmail(e.target.value)}
//            className="w-full p-2 border rounded"
//            required
//          />
//        </div>
//        <div>
//          <label htmlFor="password" className="block text-gray-700">Password</label>
//          <input
//            type="password"
//            id="password"
//            value={password}
//            onChange={(e) => setPassword(e.target.value)}
//            className="w-full p-2 border rounded"
//            required
//          />
//        </div>
//        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
//      </form>
//    </div>
//  );
//}
//
//export default Login;
// src/components/Auth/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
      setUser(response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-indigo-400"
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
            />
          </div>
          <button type="submit" className="w-full py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Login</button>
        </form>
      </div>
    </div>
  );
};


export default Login;
