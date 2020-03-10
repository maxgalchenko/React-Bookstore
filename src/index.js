import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import BookstoreService from './services/bookstore-service';
import store from './store';

const bookstoreService = new BookstoreService();

const app = (
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <div className='Index'>
            <App />
          </div>
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>
);

render(app, document.querySelector('#root'));
