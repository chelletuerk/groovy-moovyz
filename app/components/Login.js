import React, { Component } from 'react'
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
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  render() {
    const { fetchLogin, addUser } = this.props
    const { email, password, newUserEmail, newUserPassword, newUser } = this.state
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchLogin(email, password)
          this.setState({email: '', password: ''})
        }}>

          <input className='email' placeholder='email' id="email" onChange={this.updateInput} value={email} />
          <input placeholder='password' id="password" onChange={this.updateInput} value={password} />
            <Button className='loginBtn' text='login' />
          </form>
        <form onSubmit={(e) =>{
          e.preventDefault()
          addUser(newUser, newUserEmail, newUserPassword)
          this.setState({newUser: '', newUserEmail: '', newUserPassword: ''})
        }}>
          <input placeholder='New User Name' onChange={this.updateInput} value={newUser} id="newUser" />
          <input placeholder='New User Email' onChange={this.updateInput} value={newUserEmail} id="newUserEmail"/>
          <input placeholder='New User Password' onChange={this.updateInput} value={newUserPassword} id="newUserPassword" />
            <Button text='Add New User' />
        </form>
      </div>
    )
  }
}
