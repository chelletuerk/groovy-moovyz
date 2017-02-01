import { connect } from 'react-redux'
import { fetchData } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  if (state.movieApp[0]) {
  let movieState = state.movieApp[0]
  return {title: movieState.title, photo: movieState.photo, popularMovies: movieState.popularMovies}
  }
  return state
}

const mapDispatchToProps = {
    fetchData
}

export default connect(null)(Login)
