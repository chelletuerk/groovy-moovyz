import { connect } from 'react-redux'
import { fetchLogin } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {user: state.user}
  }

const mapDispatchToProps = {
    fetchLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
