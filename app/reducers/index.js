import Redux from 'redux'
// import filterReducer from './filter-reducer'

const movies = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
    // return Object.assign({}, state, action.draftMessage)
    console.log('test')
    return [...state, {draftMessage: action.draftMessage, payload: action.payload}]
    default:
      return state
  }
}

export default  movies
