import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import reduxConfig from './redux/store'

import { PersistGate } from 'redux-persist/integration/react'

const redux = reduxConfig()

ReactDOM.render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor} >
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


