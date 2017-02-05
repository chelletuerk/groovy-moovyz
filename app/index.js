import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import MovieIndexContainer from './containers/MovieIndexContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import LoginContainer from './containers/LoginContainer'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import movies from './reducers/movies-reducer'
import user from './reducers/user-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ user, movies }),
  {
    user: {},
    movies: {
      popularMovies: [],
      searchedMovies: [],
      favorites: [],
    }
  },
  composeEnhancers(applyMiddleware(thunk))
)

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
      <IndexRedirect to='/login' component={LoginContainer} />
        <Route path='/login' component={LoginContainer} />
        <IndexRoute component={MovieIndexContainer} />
        <Route path='/favorites' component={FavoritesContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
