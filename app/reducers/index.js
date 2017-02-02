import Redux from 'redux'
import { Link, browserHistory } from 'react-router'
import { fetchData } from '../actions'


const movies = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
      title: action.payload.title,
      popularMovies: action.payload.results,
      photo: action.payload.poster_path}]
      case 'SIGN_IN' :
      if(action.emailKey === action.email && action.passwordKey === action.password) {
        browserHistory.push('/')
        return [...state , {
          email: action.email,
          password: action.password,
          emailKey: action.emailKey,
          passwordKey: action.passwordKey}]
      }
    default:
      return state
  }
}

export default  movies
