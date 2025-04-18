import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterForm from './pages/RegisterFormPage'; // Thêm dòng này

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} /> {/* Tuyến mới */}
      </Routes>
    </Router>
  );
}

export default App;
