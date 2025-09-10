import React, { useState } from 'react';
import MainLayout from './pages/MainLayout';
import Login from './pages/Login';
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if(isAuthenticated) {
    return (
      <MainLayout />
    );
  }
  
  return (
    <Login setIsAuthenticated={setIsAuthenticated}/>
  );
}

export default App;
