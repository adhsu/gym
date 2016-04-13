import 'react-fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import reducers from './reducers/index'
import App from './containers/App'
require('./styles/main.styl')

const rootReducer = combineReducers(Object.assign({}, reducers));
let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

