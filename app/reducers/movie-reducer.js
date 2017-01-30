const movies = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
    return [...state, {id: action.id, draftMessage: }]
    default:
      return state
  }
}

export default  movies
