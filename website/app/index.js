import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './redux/store';
import './assets/styles/index.css';
import AppComponent from './components/app/AppComponent';

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root'));

