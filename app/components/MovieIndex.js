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
    const { fetchData, movieArray } = this.props
    return (
      <div>
      MOVIES
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchData(this.state.draftMessage)
          // handleSubmit(this.state.draftMessage, 2)
        }}>
          <input
            value={this.state.draftMessage}
            onChange={(e) => this.setState({draftMessage: e.target.value})}
          />
          <button>button</button>
        </form>
      </div>
    )
  }
}
