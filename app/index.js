import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MovieIndex from './components/MovieIndex';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools);


const router = (
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
      </Route>
    </Router>
)

ReactDOM.render(
<Provider store={store}>
  {router}
</Provider>, 
document.getElementById('main'))
