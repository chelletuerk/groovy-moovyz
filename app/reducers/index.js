import { combineReducers } from 'redux'
import movieReducer from './movie-reducer'
// import filterReducer from './filter-reducer'

const rootReducer = combineReducers({
  movieReducer
  // filterReducer
})

export default rootReducer
