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
          </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.loadFavorites()}
        </ul>
      </div>
    )
  }
}
