import { connect } from 'react-redux'
import { fetchLogin } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {email: state.email, password: state.password, emailKey: state.emailKey, passwordKey: state.passwordKey}
  }

const mapDispatchToProps = {
    fetchLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
