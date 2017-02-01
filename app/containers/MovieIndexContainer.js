import { connect } from 'react-redux'
import { fetchData } from '../actions'
import MovieIndex from '../components/MovieIndex'

const mapStateToProps = (state) => {
  return {movieArray: [...state]}
}

const mapDispatchToProps = {
    fetchData
    // handleSubmit: (draftMessage, id) => {
    //   dispatch(fetchMovie(draftMessage, id))
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex)
