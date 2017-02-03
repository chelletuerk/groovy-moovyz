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
    if(this.props.movies.popularMovies) {
    return this.props.movies.popularMovies.map((movie, i) => {
    return (movie.poster_path === null) ? null  : <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /><Button text="&#9829;" handleClick={(e) => this.props.sendFavorite(movie, this.props.user.user)} /></li>
    })
    }
  }

  searchMovies() {
    if(this.props.movies.searchedMovies) {

    return this.props.movies.searchedMovies.map((movie, i) => {
    return (movie.poster_path === null) ? null  : <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /></li>
    })
    }
  }

  render() {
    const { fetchData, movies } = this.props
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
          {!this.state.draftMessage && this.loadMovies()}
          {this.state.draftMessage && this.searchMovies()}
        </ul>
      </div>
    )
  }
}
