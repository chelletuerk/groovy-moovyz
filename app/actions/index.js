import fetch from 'isomorphic-fetch'

export const searchMovie = (draftMessage, payload) => {
  console.log("red")
  return {
    type: 'SEARCH_MOVIE',
    draftMessage
  }
}

export const fetchData = (draftMessage) => {
  console.log("red")
  return (dispatch) => {
      fetch('https://api.themoviedb.org/3/movie/550?api_key=5cfdb8d0915ecb8d60d107cef74a22e8')
        .then(response => response.json())
        console.log(response)
        .then(json => dispatch({type: action, json}))
    // .then(data => data.value.joke)
    .catch(err => console.log(err))
    // .then(payload => dispatch(searchMovie(draftMessage, payload)))

  }
}
