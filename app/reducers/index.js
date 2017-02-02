import Redux from 'redux'
import { Link, browserHistory } from 'react-router'
import { fetchData } from '../actions'


const movies = (state = {}, action) => {
  switch (action.type) {

    case 'POPULAR_MOVIES':
    return [...state, {
      draftMessage: action.draftMessage,
      payload: action.payload,
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

    case 'SEARCHED_MOVIE':
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
