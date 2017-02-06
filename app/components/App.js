import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {

  // home() {
  //   return browserHistory.push('/')
  // }

  render() {
    return (
      <div>
        <Link id="tite" to="/"><h1 className='header-title'>Groovie Movies</h1></Link>
        {this.props.children}
      </div>
    )
  }
}
