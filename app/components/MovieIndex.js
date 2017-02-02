import React, { Component } from 'react'
import Button from './Button'


export default class MovieIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMessage: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.props.fetchData({type: 'popular'})
  }

  handleSearch(e) {
    this.setState({draftMessage: e.target.value})
    this.props.fetchData({type: 'search', query: e.target.value})
  }

  loadMovies() {
    if(this.props.popularMovies) {
    return this.props.popularMovies.map((movie, i) => {
      // console.log(movie)
      return (
        <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /></li>
      )
    })
  }
  return
}

  render() {
    const { fetchData, movieArray, title, photo, popularMovies } = this.props
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
            onChange={this.handleSearch}
          />
        </form>
        <ul>
          {this.loadMovies()}
        </ul>
      </div>
    )
  }
}
