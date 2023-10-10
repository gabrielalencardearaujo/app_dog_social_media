import React from 'react';
import './assets/Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
import Home from './assets/Components/Home';
import Login from './assets/Components/Login/Login';


const App = () => {
  return <div>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login/*' element={<Login />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
