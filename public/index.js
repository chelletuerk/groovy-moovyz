import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import App from './app/components/App'
import MovieIndexContainer from './app/containers/MovieIndexContainer'
import FavoritesContainer from './app/containers/FavoritesContainer'
import LoginContainer from './app/containers/LoginContainer'


import movies from './app/reducers/movies-reducer'
import user from './app/reducers/user-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ user, movies }),
  {
    user: {},
    movies: {
      popularMovies: [],
      searchedMovies: [],
      favorites: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
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
