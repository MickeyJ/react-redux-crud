import React from 'react'
import ReactDOM,{ render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'

import reducers from './reducers';
import Layout from './components/Layout'

const storeWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <Layout title={'Some Website'}/>
  </Provider>,
  document.getElementById('react-app')
);





