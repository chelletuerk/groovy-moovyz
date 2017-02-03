const movies = (state = {}, action) => {
  switch (action.type) {

    case 'POPULAR_MOVIES':
    return Object.assign(state, {popularMovies: action.payload.results})


    case 'SEARCHED_MOVIE':
    return Object.assign(state, {searchedMovies: action.payload.results})

    default:
      return state
  }
}

export default  movies
