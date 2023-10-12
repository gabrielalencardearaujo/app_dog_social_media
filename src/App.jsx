import React from 'react';
import './assets/Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
import Home from './assets/Components/Home';
import Login from './assets/Components/Login/Login';
import { UserStorage } from './UserStorage';
import User from './assets/Components/User/User';
import ProtectedRouter from './assets/Components/Errors/ProtectedRouter';


const App = () => {
  return <div>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />

          <Route path='conta/*' 
            element={
              <ProtectedRouter>
                <User />
              </ProtectedRouter>
            } 
          />

        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
