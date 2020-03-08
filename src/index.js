import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

const app = (
  <div className='Index'>
    <App />
  </div>
);

ReactDOM.render(app, document.querySelector('#root'));
