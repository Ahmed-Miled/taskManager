import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Todo from './Component/Todo';
import Schedule from './Component/Schedule'; 
import Game from './Component/Game';

import Header from './Component/Header';
import ErrorPage from './Component/ErrorPage';


const App = () => {
  return (
    <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/todo' Component={Todo} />
        <Route path='/schedule' Component={Schedule} />
        <Route path='/game' Component={Game} />
        <Route path='*' Component={ErrorPage}/>
      </Routes>
      <NavBar />
    </Router>
  </React.StrictMode>
  );
};

export default App;
