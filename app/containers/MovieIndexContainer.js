import { connect } from 'react-redux'
import { fetchMovie } from '../actions'
import MovieIndex from '../components/MovieIndex'

const mapStateToProps = (state) => {
  return {movieArray: state.movieReducer}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (draftMessage, id) => {
      dispatch(fetchMovie(draftMessage, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
