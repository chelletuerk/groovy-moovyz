import React, { Component } from 'react'
import Button from './Button'
import { Link } from 'react-router'

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
      } else {
        this.props.fetchData({type: 'popular'})
      }
    })
  }

  loadMovies() {
    if(this.props.movies.popularMovies) {
      return this.props.movies.popularMovies.map((movie, i) => {
        return (
          (movie.poster_path === null)
          ? null
          : (
            <li className='card' key={i}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              />
              <Button
                className='heartBtn'
                text="&#9829;"
                handleClick={
                  (e) => {
                    this.props.sendFavorite(movie, this.props.user.user)
                    e.target.id = 'favorited'
                  }
                }
              />
            </li>
          )
        )
      })
    }
  }

  searchMovies() {
    if(this.props.movies.searchedMovies) {
      return this.props.movies.searchedMovies.map((movie, i) => {
          return
            (movie.poster_path === null)
            ? null
            :
              <li className='card' key={i}>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                />
              <Button
                className='heartBtn'
                text='&#9829;'
                handleClick={
                  (e) => this.props.sendFavorite(movie, this.props.user.user)
                } />
              </li>
            })
          }
        }

  render() {
    const { fetchData, movies } = this.props
    const { favorites } = this.props.favorites
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchData(this.state.draftMessage)
        }}>
        <div className='search'>
          <input
            placeholder='search movies'
            value={this.state.draftMessage}
            onChange={this.handleSearch}
          />
        </div>
        </form>
        {favorites.length > 0 && <Link to='/favorites'>
          <Button text='favorites'/>
        </Link>}
        <Link to='/login'>
          <Button text='sign in/sign up'/>
        </Link>
        <ul>
          {!this.state.draftMessage && this.loadMovies()}
          {this.state.draftMessage && this.searchMovies()}
        </ul>
      </div>
    )
  }
}
