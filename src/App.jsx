import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './Component/NavBar';
import DailyQuest from './Component/DailyQuest';
import Todo from './Component/Todo';
import Schedule from './Component/Schedule'; 
import Game from './Component/Game';

import Header from './Component/Header';
import ErrorPage from './Component/ErrorPage';


import './Styles/App.css';

const App = () => {
  return (
    <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' Component={DailyQuest} />
        <Route path='/dailyQuest' Component={DailyQuest} />
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
