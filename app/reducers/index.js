import Redux from 'redux'

const movies = (state = {}, action) => {
  switch (action.type) {

    case 'POPULAR_MOVIES':
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
      popularMovies: action.payload.results,
    }]

    case 'SEARCHED_MOVIE' :
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
      popularMovies: action.payload.results,
    }]

    case 'SIGN_IN' :
      return [...state , {
        email: action.email,
        password: action.password,
        emailKey: action.emailKey,
        passwordKey: action.passwordKey}]
    default:
      return state
  }
}

export default  movies
