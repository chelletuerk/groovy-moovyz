import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Button from './Button'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateEmail(e) {
    this.setState({email: e.target.value})
  }

  updatePassword(e) {
    this.setState({password: e.target.value})
  }

  // signIn() {
  //   this.fetchLogin()
  // }



  // checkPassword(emailkey, passkey) {
  //   if(emailkey === this.state.email && passkey === this.state.password) {
  //     browserHistory.push('/')
  //   } else {
  //     console.log('false')
  //   }
  // }

  render() {
    const { fetchLogin } = this.props
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchLogin(this.state.email, this.state.password)
        }}>
        <input placeholder='email' onChange={this.updateEmail} value={this.state.email} />
        <input placeholder='password' onChange={this.updatePassword} value={this.state.password} />
          <Button
              text='login'
              handleClick={fetchLogin(this.state.email, this.state.password)}
            />
        </form>
      </div>
    )
  }
}
