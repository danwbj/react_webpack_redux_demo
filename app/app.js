/*import React from 'react';  
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';*/


import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import Home from "./containers/home.js";
import reducer from './reducers/index.js'
global.hashHistory = hashHistory;


import thunk from 'redux-thunk';
import logger from 'redux-logger'
const createStoreWithMiddleware = applyMiddleware(thunk,logger())(createStore);

let store = createStoreWithMiddleware(reducer)
let Routers = 
  <Router history={hashHistory}>
    <Route path="/home" component={Home}/>
    <Route path="/page1" component={Page1}/>
    <Route path="/page2" component={Page2}/>
  </Router>

ReactDOM.render(
   <Provider store={store}>
        {Routers}
   </Provider>,
  document.getElementById('container')
);