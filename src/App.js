// import logo from './logo.svg';



// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from "./Pages/Welcome.jsx"
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import AccountSettings from "./Pages/AccountSettings.jsx"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<AccountSettings />} />
    </Routes>
  );
};

export default App;

