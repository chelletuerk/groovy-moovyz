import React, { Component } from 'react'
import Button from './Button'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMessage: '',
    }
  }

  signIn() {
    let validation = fetch('http://localhost:3000/api/users')
    .then(response => response.json())
      console.log(validation)
  }

  render() {

    return (
      <div>
      <input placeholder ="email" value={this.state.email} />
      <input placeholder ="password" value={this.state.password} />
        <Button
          text='login'
          handleClick={this.signIn.bind(this)}

        />
      </div>
    )
  }
}
