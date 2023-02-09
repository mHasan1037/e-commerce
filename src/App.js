import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notification from './Component/Notification/Notification';
import DetailPage from './Container/DetailPage/DetailPage';
import Footer from './Container/Footer/Footer';
import HomePage from './Container/HomePage/HomePage';
import Laptop from './Container/Laptop/Laptop';
import NavBar from './Container/NavBar/NavBar'
import SmartPhones from './Container/SmartPhones/SmartPhones';

function App() {


  return (
    <BrowserRouter>
        <NavBar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '82vh' }}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path='/smartphone' element={<SmartPhones />} />
            <Route path='/laptop' element={<Laptop />} />
            <Route exact path="*" element={<HomePage />} />
            <Route path='/detailpage/:id' element={<DetailPage /> } />
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
