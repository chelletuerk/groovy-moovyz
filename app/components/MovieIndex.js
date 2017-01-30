import React, { Component } from 'react'
import Button from './Button'


export default class MovieIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMessage: '',
    }
  }

  render() {
    const { handleSubmit, movieArray } = this.props
    return (
      <div>
      MOVIES
        <form onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(this.state.draftMessage, movieArray.length)

        }}>
          <input
            value={this.state.draftMessage}
            onChange={(e) => this.setState({draftMessage: e.target.value})}
          />
        </form>
      </div>
    )
  }
}
