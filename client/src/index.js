
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Inventory from './components/inventory/Inventory';

import store from './store'

import 'bootstrap3/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Inventory}></IndexRoute>
        <Route path="inventory" component={Inventory}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
