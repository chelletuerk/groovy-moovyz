import { connect } from 'react-redux'
import { searchMovie } from '../actions'
import MovieIndex from '../components/MovieIndex'

const mapStateToProps = (state) => {
  return {movieArray: state.movieReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (draftMessage, id) => {
      dispatch(searchMovie(draftMessage, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
