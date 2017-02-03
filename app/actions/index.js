import fetch from 'isomorphic-fetch'
import { Link, browserHistory } from 'react-router'

export const displayPopularMovies = (payload) => {
  return {
    type: 'POPULAR_MOVIES',
    payload,
  }
}


export const signIn = (email, password, user) => {
  return {
    type: 'SIGN_IN',
    email,
    password,
    user
  }
}

export const displaySearchedMovie = (query, payload) => {
  return {
  type: 'SEARCHED_MOVIE',
  query,
  payload,
  }
}

export const fetchData = (params) => {
  if (params.type === 'popular') {
    return fetchPopular()
  } else if (params.type ==='search') {
    return fetchSearchedMovie(params.query)
  }
}

const fetchPopular = () => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const popular = 'movie/popular?api_key=5cfdb8d0915ecb8d60d107cef74a22e8'

  return (dispatch) => {
    fetch(`${baseUrl}${popular}`)
      .then(response => {
        return response.json()
      })
      .then( json => {
        dispatch(displayPopularMovies(json))
      })
      .catch(err => console.log('err'))
  }
 }

const fetchSearchedMovie = (query) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const search = `search/movie?api_key=5cfdb8d0915ecb8d60d107cef74a22e8&query=${query}`
      return (dispatch) => {
    fetch(`${baseUrl}${search}`)
        .then(response => {
          return response.json()
        })
        .then( json => {
          dispatch(displaySearchedMovie(query, json))
        })
        .catch(err => console.log('err'))
      }
}

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    console.log('in')
    return fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    }).then(data => dispatch(signIn(email,password, data)))
      .then(data => browserHistory.push('/'))
  }
}
