import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Banner from './components/Banner';
const App = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      
    </>
  );
};

export default App;