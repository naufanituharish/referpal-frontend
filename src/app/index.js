import React from 'react';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Router
import Router from '../router';

// Root Reducers
import rootReducers from '../store/reducers';
const createStoreMiddleware = createStore(rootReducers, applyMiddleware(thunk, createLogger, promiseMiddleware));

const App = () => (
  <Provider store={createStoreMiddleware}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
)
export default App;
