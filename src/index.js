import React from 'react';
// import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style/style.css'

import Home from './views/Home';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';
import HeaderSection from './components/Header/HeaderSection';
import FooterSection from './components/Footer/FooterSection';
import FooterSection2 from './components/Footer2/FooterSection2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="wrapper">
    <HeaderSection />
    

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound/>} />

      </Routes>

    <FooterSection />
    <FooterSection2 />
    </div>
    </BrowserRouter>

  </React.StrictMode>
);
