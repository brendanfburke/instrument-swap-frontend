import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import UserAccount from './pages/UserAccount';
import NewListing from './pages/NewListing';
import Listing from './pages/Listing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listing/:id' element={<Listing />} />
          <Route path='/account' element={<Account />} >
            <Route path=':id' element={<Account />} />
          </Route>
          <Route path='/new' element={<NewListing />} />
          <Route path='/myaccount' element={<UserAccount />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

