// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // This will use the environment variable if available, otherwise fall back to the default URL
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  console.log("API URL:", apiUrl);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Use the `apiUrl` variable to construct the full endpoint URL
      const response = await axios.post(`${apiUrl}/auth/register`, {
        name,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! You can now log in.');
      setError('');  // Clear any previous errors
    } catch (err) {
      console.error('Error registering:', err.response ? err.response.data : err.message);
      setError('Registration failed. Please try again.');
      setSuccess('');  // Clear any previous success messages
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
      {success && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{success}</div>}
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
}

export default Register;
