import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';

import CardReducer from './Reducer/CardReducer.js';
import { createStore } from 'redux';

const store =  createStore(CardReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App store={store} />
    </Provider>
  </React.StrictMode>,
)
