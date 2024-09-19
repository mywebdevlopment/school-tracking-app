// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to the School Tracking App</h1>
      <p className="mt-4">Navigate to <Link to="/login" className="text-blue-500">login</Link> or <Link to="/register" className="text-blue-500">register</Link></p>
      <p className="mt-4">Navigate to <Link to="/admin" className="text-blue-500">Admin Dashboard</Link> or <Link to="/parent" className="text-blue-500">Parent Dashboard</Link></p>
    </div>
  );
}


export default Home;
