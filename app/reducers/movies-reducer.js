const movies = (state = {}, action) => {
  switch (action.type) {

    case 'POPULAR_MOVIES':
    return Object.assign({}, state, {popularMovies: action.payload.results})


    case 'SEARCHED_MOVIE':
    return Object.assign({}, state, {searchedMovies: action.payload.results})

    case 'ADD_FAVE':
    return Object.assign({}, state, {
      favorites: action.movie
    })

    default:
      return state
  }
}

export default  movies
