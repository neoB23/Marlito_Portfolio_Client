import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './index.css';


const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    
    </>
  );
};

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainLayout><Hero/></MainLayout>} />
    </Routes>
  </Router> 
  )
}

export default App
