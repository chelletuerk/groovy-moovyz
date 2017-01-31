export const searchMovie = (draftMessage, id) => {
  return {
    type: 'SEARCH_MOVIE',
    draftMessage,
    id
  }
}


export const fetchMovie = () => {
  return (dispatch) => {
    return fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => data.value.joke)
    .then(joke => dispatch(searchMovie(joke)))
  }
}
