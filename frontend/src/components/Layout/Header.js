// src/components/Layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/admin" className="text-white">Admin</Link></li>
        <li><Link to="/parent" className="text-white">Parent</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
