import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AppLayout from './AppLayout'; // Main dashboard layout
import './App.css'; // Custom styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
}

export default App;