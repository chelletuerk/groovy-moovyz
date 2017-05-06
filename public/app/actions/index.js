import fetch from 'isomorphic-fetch'
import { Link, browserHistory } from 'react-router'

export const addFave = (movie) => {
  return {
    type: 'ADD_FAVE',
    movie,
  }
}

export const deleteFave = (movie) => {
  return {
    type: 'DELETE_FAVE',
    movie,
  }
}

export const signIn = (email, password, user) => {
  console.log(email, password, user)
  return {
    type: 'SIGN_IN',
    email,
    password,
    user,
  }
}

export const displayPopularMovies = (payload) => {
  return {
    type: 'POPULAR_MOVIES',
    payload,
  }
}

export const displaySearchedMovie = (query, payload) => {
  return {
    type: 'SEARCHED_MOVIE',
    query,
    payload,
  }
}


const fetchPopular = () => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const popular = 'movie/popular?api_key=5cfdb8d0915ecb8d60d107cef74a22e8'

  return (dispatch) => {
    fetch(`${baseUrl}${popular}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(displayPopularMovies(json))
      })
      .catch(err => 'err')
  }
}

const fetchSearchedMovie = (query) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const search = `search/movie?api_key=5cfdb8d0915ecb8d60d107cef74a22e8&query=${query}`
  return (dispatch) => {
    fetch(`${baseUrl}${search}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(displaySearchedMovie(query, json))
      })
      .catch(err => 'err')
  }
}

export const fetchData = (params) => {
  if (params.type === 'popular') {
    return fetchPopular()
  } else if (params.type === 'search') {
    return fetchSearchedMovie(params.query)
  }
}

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(data => data.json())
      // CHELLE, data.data is undefined, you need to dig into data and "find" the user profile to return
      .then(data => dispatch(signIn(email, password, data.data)))
      .then(data => browserHistory.push('/'))
      .catch(err => alert('Email and Password do not match'))
  }
}

export const sendFavorite = (movie, user) => {
  if (!user) {
    alert('you must login to add favorites')
    browserHistory.push('/login')
    return
  }
  return (dispatch) => {
    return fetch('api/users/favorites/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        movie_id: movie.id,
        user_id: user.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview }),
    })
      .then(data => console.log(data))
      .then(data => dispatch(addFave(movie)))
  }
}

export const deleteFavorite = (movie, user) => {
  return (dispatch) => {
    return fetch(`api/users/${user.id}/favorites/${movie.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(data => dispatch(deleteFave(movie)))
  }
}

export const addUser = (name, email, password) => {
  return (dispatch) => {
    return fetch('/api/users/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
  }
}
