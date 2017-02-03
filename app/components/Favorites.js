import React, { Component } from 'react'
import Button from './Button'


export default class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMessage: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  // componentDidMount() {
  //   this.props.fetchData({type: 'popular'})
  // }
  //
  //
  // handleSearch(e) {
  //   this.setState({draftMessage: e.target.value}, () => {
  //     if (this.state.draftMessage.length > 0) {
  //       this.props.fetchData({type: 'search', query: this.state.draftMessage})
  //     }
  //     if (this.state.draftMessage.length < 1) {
  //       this.props.fetchData({type: 'popular'})
  //     }
  //   })
  // }
  //
  // loadMovies() {
  //   if(this.props.movies.popularMovies) {
  //   return this.props.movies.popularMovies.map((movie, i) => {
  //   return (movie.poster_path === null) ? null  : <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /></li>
  //   })
  //   }
  // }

  loadFavorites() {
    if(this.props.favorites) {
    return this.props.favorites.map((movie, i) => {
    return (favorites.poster_path === null) ? null  : <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${favorites.poster_path}`} /></li>
    })
    }
  }

  render() {
    const { favorites } = this.props
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
        {this.loadFavorites()}
        </ul>
      </div>
    )
  }
}
