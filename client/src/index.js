
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Inventory from './components/inventory/Inventory';
import Test from './components/test/Test';

import store from './store'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Inventory}></IndexRoute>
        <Route path="inventory" component={Inventory}></Route>
        <Route path="test" component={Test}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
