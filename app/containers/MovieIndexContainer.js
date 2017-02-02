import { connect } from 'react-redux'
import { fetchData } from '../actions'
import MovieIndex from '../components/MovieIndex'

const mapStateToProps = (state) => {
  console.log(state.movies)
  return {movies: state.movies}
}

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
