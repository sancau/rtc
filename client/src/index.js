import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Inventory from './components/inventory/Inventory';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Inventory}></IndexRoute>
      <Route path="inventory" component={Inventory}></Route>
    </Route>  
  </Router>,
  document.getElementById('root')
);


