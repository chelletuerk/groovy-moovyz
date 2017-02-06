import movies from '../../app/reducers/movies-reducer'
import { expect, assert } from 'chai'

describe('movies reducer', () => {

  it.skip('should return the initial state', () => {
    expect(movies(undefined, {}) ).toEqual({})
  });

  it.skip('POPULAR_MOVIES should change the initial state', () => {
    this.state = app;
    this.action = action;
    expect(movies('undefined', {}) ).toEqual(action.payload.results)
  });




});
