import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './Container/DetailPage/DetailPage';
import HomePage from './Container/HomePage/HomePage';
import Laptop from './Container/Laptop/Laptop';
import NavBar from './Container/NavBar/NavBar'
import SmartPhones from './Container/SmartPhones/SmartPhones';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
           <Route exact path="/" element={<HomePage />} />
           <Route path='/smartphone' element={<SmartPhones />} />
           <Route path='/laptop' element={<Laptop />} />
           <Route exact path="*" element={<HomePage />} />
           <Route path='/detailpage/:id' element={<DetailPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
