import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './index.css';

const app = (
  <div className='Index'>
    <App />
  </div>
);

render(app, document.querySelector('#root'));
