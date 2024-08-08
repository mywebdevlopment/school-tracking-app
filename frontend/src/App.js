// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Parent from './pages/Parent';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { AuthProvider } from './context/AuthContext';
import { ChildProvider } from './context/ChildContext';

function App() {
  return (
    <AuthProvider>
      <ChildProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/parent" element={<Parent />} />
          </Routes>
          <Footer />
        </div>
      </ChildProvider>
    </AuthProvider>
  );
}

export default App;
