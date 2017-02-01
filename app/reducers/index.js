import Redux from 'redux'

const movies = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
      title: action.payload.title,
      popularMovies: action.payload.results,
      photo: action.payload.poster_path}]
    default:
      return state
  }
}

export default  movies
