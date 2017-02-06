import React, { Component } from 'react'
import Button from './Button'

export default class Favorites extends Component {
  loadFavorites() {
    return this.props.favorites.favorites.map((movie, i) => {
      return (
        (movie.poster_path === null)
        ? null
        : <li
            className='card'
            key={i}
          >
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            />
            <Button
              text='&#xd7;'
              className='deleteFave'
              handleClick={
                e => this.props.deleteFavorite(movie, this.props.user.user)
              }
            />
            <h4>{movie.overview}</h4>
          </li>
      )
    })
  }

  render() {
    const { favorites } = this.props.favorites
    return (
      <div>
        <ul>
          {this.loadFavorites()}
        </ul>
        {<h4>{favorites.length < 1 && 'You have no favorites'}</h4>}
      </div>
    )
  }
}
