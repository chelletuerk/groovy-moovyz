import React, { Component } from 'react';
import { Link } from 'react-router'

// require('./../assets/styles/main')
// require('./../assets/styles/media')

export default class App extends Component {

  render() {
    return (
      <div>
        <Link to="/"><h1 className='header-title'>Groovie Movies</h1></Link>
        {this.props.children}
      </div>
    )
  }
}
