import React from 'react'
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import logger from 'redux-logger'

import reducers from './reducers';
import Layout from './components/Layout'
import './style/main.scss'

const storeWithMiddleware = applyMiddleware(
  logger(), promise 
)(createStore);

render(
  <Provider store={storeWithMiddleware(reducers)}>
    <Layout title={'Some Website'}/>
  </Provider>,
  document.getElementById('react-app')
);





