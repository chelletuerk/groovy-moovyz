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
    console.log('empty')
    this.setState({draftMessage: e.target.value}, () => {
      if (this.state.draftMessage.length > 0) {
        this.props.fetchData({type: 'search', query: this.state.draftMessage})
      }
      if (this.state.draftMessage.length < 1) {
        this.props.fetchData({type: 'popular'})
      }
    })
  }

  loadMovies() {
    if(this.props.popularMovies) {
    return this.props.popularMovies.map((movie, i) => {
    return (movie.poster_path === null) ? null  : <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /></li>
    })
  }
  }

  render() {
    const { fetchData, movieArray, title, photo, popularMovies } = this.props
    return (
      <div>
      MOVIES
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchData(this.state.draftMessage)
        }}>
        <div className='search'>
          <input
            value={this.state.draftMessage}
            onChange={this.handleSearch}
          />
        </div>
        </form>
        <ul>
          {this.loadMovies()}
        </ul>
      </div>
    )
  }
}
