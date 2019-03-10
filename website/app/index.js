import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from 'redux/store';
import './assets/styles/index.css';
import AppComponent from './appComponent/AppComponent';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

