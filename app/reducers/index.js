import Redux from 'redux'

const movies = (state = {}, action) => {
  // debugger
  switch (action.type) {
    case 'POPULAR_MOVIES':
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
      // title: action.payload.title,
      popularMovies: action.payload.results,
      // photo: action.payload.poster_path
    }]
    case 'SEARCHED_MOVIE' :
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
      popularMovies: action.payload.results,
    }]
    default:
      return state
  }
}

export default  movies
