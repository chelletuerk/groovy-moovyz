import { connect } from 'react-redux'
import { signIn } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state) => {
  return {email: state.email, password: state.password, emailKey: state.emailKey, passwordKey: state.passwordKey}
  }

const mapDispatchToProps = {
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
