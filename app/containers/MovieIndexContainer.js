import { connect } from 'react-redux'
import { fetchData, sendFavorite } from '../actions'
import MovieIndex from '../components/MovieIndex'

const mapStateToProps = (state) => {
  return {movies: state.movies, user: state.user, favorites: state.movies}
}

const mapDispatchToProps = {
    fetchData,
    sendFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
