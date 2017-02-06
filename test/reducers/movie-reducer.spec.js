import movies from '../../app/reducers/movies-reducer'
import { expect, assert } from 'chai'

describe('movies reducer', () => {

  it('should return the initial state', () => {
    expect(movies(undefined, {}) ).to.deep.equal({})
  });

  it('POPULAR_MOVIES should change the initial state', () => {
    const action = {
      type: 'POPULAR_MOVIES',
      payload:{popularMovies:['movies', 'movie2', 'movie3']}
    }
    expect(movies(undefined, action)).to.deep.equal({popularMovies: ['movie1', 'movie2', 'movie3']})
  });

  it('SEARCHED_MOVIE should change the initial state', () => {
    const action = {
      type: 'SEARCHED_MOVIE',
      payload:{searchedMovies:['movies', 'movie2', 'movie3']}
    }
    expect(movies(undefined, action)).to.deep.equal({searchedMovies: ['movie1', 'movie2', 'movie3']})
  });
});
