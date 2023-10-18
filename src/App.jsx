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
import Photo from './assets/Components/Photo/Photo';
import UserProfile from './assets/Components/User/UserProfile';
import NotFound404 from './assets/Components/Errors/NotFound404';


const App = () => {
  return <div className='App'>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className='AppBody'>
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
            <Route path='photo/:id' element={<Photo />} />
            <Route path='profile/:user' element={<UserProfile />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </main>

        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
