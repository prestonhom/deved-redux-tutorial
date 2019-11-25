import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux'


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// STORE will hold all the data as the single source of truth -> globalized state

// ACTION we need an action now, an action desecribes what you are going to 
// do this app will be a counter that increments a simple function that returns an object

// REDUCER - describes how our actions will check 




ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
