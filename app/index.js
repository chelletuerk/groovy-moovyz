import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import MovieIndexContainer from './containers/MovieIndexContainer'
import LoginContainer from './containers/LoginContainer'
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import movies from './reducers/movies-reducer'
import user from './reducers/user-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({user: user, movies: movies}),
  {user: {}, movies: {popularMovies: [], searchedMovies: []}},
  composeEnhancers(applyMiddleware(thunk))
)

// export const getRoutes = (store) => (
//   const authRequired = (nextState, replaceState) => {
//     // Now you can access the store object here.
//     const state = store.getState();
//
//     if (!state.user.isAuthenticated) {
//       // Not authenticated, redirect to login.
//       replaceState({ nextPathname: nextState.location.pathname }, '/login');
//     }
//   };


const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
      <IndexRedirect to='/login' component={LoginContainer} />
        <Route path='/login' component={LoginContainer} />
        <IndexRoute component={MovieIndexContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
