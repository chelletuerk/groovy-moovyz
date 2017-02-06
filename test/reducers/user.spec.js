import user from '../../app/reducers/user-reducer'
import { expect, assert } from 'chai'

describe('user reducer', () => {

  it('should return state when someone signs in', () => {
    const action = {
      type: 'SIGN_IN',
      password: 'alligator',
      email: 'lauren@gmail.com',
      user: 'Lauren',
    }
    expect(user(undefined, action)).to.deep.equal({
      email: 'lauren@gmail.com',
      password: 'alligator',
      user: 'Lauren'});
    })
  })
