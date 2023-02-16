import { useEffect, useState } from 'react';
import CartContext from './Hooks/CartContext/CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './Container/CartPage/CartPage';
import DetailPage from './Container/DetailPage/DetailPage';
import Footer from './Container/Footer/Footer';
import HomePage from './Container/HomePage/HomePage';
import Laptop from './Container/Laptop/Laptop';
import NavBar from './Container/NavBar/NavBar'
import SmartPhones from './Container/SmartPhones/SmartPhones';

const notificationStyle = {
   position: 'fixed',
   top: 0,
   left: '50%',
   transform: 'translateX(-50%)',
   backgroundColor: 'green',
   color: 'white',
   padding: '5px 10px',
   marginTop: '5px',
   borderRadius: '5px',
   zIndex: 10
}

function App() {
  const [updateCart, setUpdateCart] = useState([])
  const [cartNotification, setCartNotification] =  useState(false)

  useEffect(()=>{
      let timerId = null;
      if(cartNotification){
        timerId = setTimeout(()=>{
          setCartNotification(false)
        }, 2000)
      }

  }, [cartNotification])


  return (
    <CartContext.Provider value={{updateCart, setUpdateCart, cartNotification, setCartNotification}}>
      <BrowserRouter>
          {cartNotification && <div style={notificationStyle}>One product is added to your cart</div>}
          <NavBar />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '82vh' }}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path='/smartphone' element={<SmartPhones />} />
              <Route path='/laptop' element={<Laptop />} />
              <Route path="/cart" element={ <CartPage /> } />
              <Route exact path="*" element={<HomePage />} />
              <Route path='/detailpage/:id' element={<DetailPage /> } />
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
