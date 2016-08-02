import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';
import Inventory from './components/inventory/Inventory';
import Test from './components/test/Test';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Inventory}></IndexRoute>
      <Route path="inventory" component={Inventory}></Route>
      <Route path="test" component={Test}></Route>
    </Route>  
  </Router>,
  document.getElementById('root')
);


