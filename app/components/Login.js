import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import Button from './Button'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      newUser: '',
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

  updateUser(e) {
    this.setState({newUser: e.target.value})
  }

  render() {
    const { fetchLogin, addUser } = this.props
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchLogin(this.state.email, this.state.password)
          this.setState({email: '', password: ''})
        }}>
          <input className='email' placeholder='email' onChange={this.updateEmail} value={this.state.email} />
          <input placeholder='password' onChange={this.updatePassword} value={this.state.password} />
              <Button
              className='loginBtn'
              text='login'
              />
          </form>
        <form onSubmit={(e) =>{
          e.preventDefault()
          addUser(this.state.newUser)
        }}>
          <input placeholder='New User Name' onChange={this.updateUser} value={this.state.newUser} />
          <input placeholder='New User Email' onChange={this.updateUser} value={this.state.newUser} />
          <input placeholder='Add New Password' onChange={this.updateUser} value={this.state.newUser} />
        </form>
      </div>
    )
  }
}
