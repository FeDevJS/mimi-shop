import React from 'react';
import './index.css';
import { HashRouter as Router} from 'react-router-dom'
import { AppRouter } from './main-components/AppRouter';
import { Nav } from './main-components/Nav';

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