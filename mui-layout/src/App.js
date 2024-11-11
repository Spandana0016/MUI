// src/App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import { Rating } from '@mui/material';  // Import Rating here

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Body />
        <Rating />
      </div>
      <Footer />
    </div>
  );
}

export default App;
