import fetch from 'isomorphic-fetch'

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

export const fetchData = (action) => {
  if (action.type === 'popular') {
    return fetchPopular()
  } else if (action.type ==='search') {
    return fetchSearchedMovie(action.query)
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
