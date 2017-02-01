import fetch from 'isomorphic-fetch'

export const searchMovie = (draftMessage, payload) => {
  return {
    type: 'SEARCH_MOVIE',
    payload,
    draftMessage
  }
}

export const fetchData = (draftMessage) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const popular = 'movie/popular?api_key=5cfdb8d0915ecb8d60d107cef74a22e8'
  const search = 'search/movie?api_key=5cfdb8d0915ecb8d60d107cef74a22e8&query=${THIS IS WHERE SEARCHED MOVIE NAME GOES}'
      return (dispatch) => {
    fetch(`${baseUrl}${popular}`)
        .then(response => {
          return response.json()
        })
        .then( json => {
         dispatch(searchMovie(draftMessage, json))
        })
        .catch(err => console.log('err'))
      }
}
