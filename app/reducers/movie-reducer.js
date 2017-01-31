const movies = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
    return Object.assign({}, state, action.draftMessage)
    // return [...state, {id: action.id, draftMessage: }]
    default:
      return state
  }
}

export default  movies
