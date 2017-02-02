import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Button from './Button'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMessage: '',
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

  signIn() {
    this.fetchLogin()
  }

  fetchLogin() {
    let validation = fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(json => json.data[0])
    .then(data => this.checkPassword(data.email, data.password))
  }

  checkPassword(emailkey, passkey) {
    if(emailkey === this.state.email && passkey === this.state.password) {
      browserHistory.push('/')
    } else {
      console.log('false')
    }
  }

  render() {

    return (
      <div>
      <input placeholder='email' onChange={this.updateEmail} value={this.state.email} />
      <input placeholder='password' onChange={this.updatePassword} value={this.state.password} />
      <Button
          text='login'
          handleClick={this.signIn.bind(this)}
        />
      </div>
    )
  }
}
