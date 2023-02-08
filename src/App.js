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
  const [dataPass, setDataPass] = useState({})
  const getProduct = ({id, price, thumbnail, title}) =>{
    setDataPass({id, price, thumbnail, title})
  }

  return (
    <BrowserRouter>
        <NavBar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Routes>
            <Route exact path="/" element={<HomePage getProduct={getProduct} />} />
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
