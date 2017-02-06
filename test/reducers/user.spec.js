import user from '../../app/reducers/user-reducer'
import { expect, assert } from 'chai'

describe('user reducer', () => {

  it('should return state when someone signs in', () => {
    const action = {
      type: 'SIGN_IN',
      password: 'alligator',
      user: 'Lauren',
    }
    expect(user(undefined, action)).toEqual([{type: 'SIGN_IN', password: 'alligator', user: 'Lauren'}]);
  });
});
