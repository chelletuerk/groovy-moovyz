import React, { Component } from 'react'
import Button from './Button'


export default class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      draftMessage: '',
    }
  }

  loadFavorites() {
    debugger
    return this.props.favorites.favorites.map((movie, i) => {
    return (movie.poster_path === null) ? null  : <li className='card' key={i}><img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} /></li>
    })
  }

  render() {
    const { favorites } = this.props.favorites
    return (
      <div>
        <ul>
        {favorites.length > 1 && this.loadFavorites()}
        {favorites.length < 2 && favorites}
        </ul>
      </div>
    )
  }
}
