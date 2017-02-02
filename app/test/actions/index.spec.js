import * as actions from '../../actions/index'
import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';

describe('actions', () => {
  it('should create an action to make an array of popular movies', () => {
      const payload = {'somejson': 'somejson', 'somemorejson': 'somemorejson'}
      const expectedAction = {
        type: 'POPULAR_MOVIES',
        payload: {'somejson': 'somejson', 'somemorejson': 'somemorejson'}
      }
      expect(actions.displayPopularMovies(payload)).to.deep.equal(expectedAction)
  })
  // ^^ Should this test be more specific?
  it('should create an action for a user to signIn', () => {
      const payload = {'somejson': 'somejson', 'somemorejson': 'somemorejson'}
      const expectedAction = {
        type: 'POPULAR_MOVIES',
        payload: {'somejson': 'somejson', 'somemorejson': 'somemorejson'}
      }
      expect(actions.displayPopularMovies(payload)).to.deep.equal(expectedAction)
  })
})
