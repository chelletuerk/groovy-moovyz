import { connect } from 'react-redux'
import { deleteFavorite } from '../actions'
import Favorites from '../components/Favorites'

const mapStateToProps = (state) => {
  return { user: state.user, favorites: state.movies }
}

const mapDispatchToProps = {
  deleteFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
