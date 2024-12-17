import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Component/NavBar';
import MainPage from './Component/MainPage'
import Header from './Component/Header';
import ErrorPage from './Component/ErrorPage';


import './Styles/App.css';

const App = () => {
  return (
    <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={MainPage} />
        <Route path='*' Component={ErrorPage}/>
      </Routes>
      <NavBar />
    </Router>
  </React.StrictMode>
  );
};

export default App;
