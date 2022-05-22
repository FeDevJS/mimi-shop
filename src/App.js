import React from 'react';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { AppRouter } from './components/AppRouter';
import { Nav } from './components/Nav';

export const App = () => {
  return (
    <>
      <div className='root-container'>
        <div className='layer'>
          <Router>
            <Nav />
            <AppRouter />
          </Router>
        </div>
      </div>
    </>
  );
};