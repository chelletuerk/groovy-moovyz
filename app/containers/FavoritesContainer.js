import { connect } from 'react-redux'
import { fetchData, sendFavorite } from '../actions'
import Favorites from '../components/Favorites'

const mapStateToProps = (state) => {
  return {user: state.user, favorites: state.movies}
}

const mapDispatchToProps = {
    fetchData,
    sendFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
