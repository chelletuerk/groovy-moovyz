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
      newUserEmail: '',
      newUserPassword: '',
    }
    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateNewUser = this.updateNewUser.bind(this)
    this.updateNewUserEmail = this.updateNewUserEmail.bind(this)
    this.updateNewUserPassword = this.updateNewUserPassword.bind(this)
  }

  updateEmail(e) {
    this.setState({email: e.target.value})
  }

  updatePassword(e) {
    this.setState({password: e.target.value})
  }

  updateNewUser(e) {
    this.setState({newUser: e.target.value})
  }

  updateNewUserEmail(e) {
    this.setState({newUserEmail: e.target.value})
  }

  updateNewUserPassword(e) {
    this.setState({newUserPassword: e.target.value})
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
          addUser(this.state.newUser, this.state.newUserEmail, this.state.newUserPassword)
          this.setState({newUser: '', newUserEmail: '', newUserPassword: ''})
        }}>
          <input placeholder='New User Name' onChange={this.updateNewUser} value={this.state.newUser} />
          <input placeholder='New User Email' onChange={this.updateNewUserEmail} value={this.state.newUserEmail} />
          <input placeholder='New User Password' onChange={this.updateNewUserPassword} value={this.state.newUserPassword} />
          <Button text='Add New User' />
        </form>
      </div>
    )
  }
}
