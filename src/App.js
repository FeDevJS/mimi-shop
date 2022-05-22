import React from 'react';
import './index.css';
import { HashRouter as Router} from 'react-router-dom'
import { AppRouter } from './components/AppRouter';
import { Nav } from './components/Nav';

export const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <AppRouter />
      </Router>
    </>
  );
};