// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import { expect, assert } from 'chai';
// import sinon from 'sinon'
// import * as actions from '../../public/app/actions/index'
//
// describe('actions', () => {
//   it('should create an action to make an array of popular movies', () => {
//     const payload = { somejson: 'somejson', somemorejson: 'somemorejson' }
//     const expectedAction = {
//       type: 'POPULAR_MOVIES',
//       payload: { somejson: 'somejson', somemorejson: 'somemorejson' },
//     }
//     expect(actions.displayPopularMovies(payload)).to.deep.equal(expectedAction)
//   })
//   // ^^ Should this test be more specific?
//   it('should create an action for a user to signIn', () => {
//     const email = 'jim@aol.com'
//     const password = 'password'
//     const user = 'jim'
//     const expectedAction = {
//       type: 'SIGN_IN',
//       email: 'jim@aol.com',
//       password: 'password',
//       user: 'jim',
//     }
//     expect(actions.signIn(email, password, user)).to.deep.equal(expectedAction)
//   })
//   it('should create an action for a user to add a favorite', () => {
//     const movie = 'Pet Life 2'
//     const expectedAction = {
//       type: 'ADD_FAVE',
//       movie: 'Pet Life 2',
//     }
//     expect(actions.addFave(movie)).to.deep.equal(expectedAction)
//   })
//   it('should create an action for a user to delete a favorite', () => {
//     const movie = 'Pet Life 2'
//     const expectedAction = {
//       type: 'DELETE_FAVE',
//       movie: 'Pet Life 2',
//     }
//     expect(actions.deleteFave(movie)).to.deep.equal(expectedAction)
//   })
//   it('should create an action for a user to display 20 popular movies', () => {
//     const payload = ['Pet Life 2', 'Crash']
//     const expectedAction = {
//       type: 'POPULAR_MOVIES',
//       payload: ['Pet Life 2', 'Crash'],
//     }
//     expect(actions.displayPopularMovies(payload)).to.deep.equal(expectedAction)
//   })
//   it('should create an action for a user to display searched movies', () => {
//     const query = 'Crash'
//     const payload = ['Crash', 'Crash']
//     const expectedAction = {
//       type: 'SEARCHED_MOVIE',
//       query: 'Crash',
//       payload: ['Crash', 'Crash'],
//     }
//     expect(actions.displaySearchedMovie(query, payload)).to.deep.equal(expectedAction)
//   })
//   it('should fetch popular movies if param type is popular', () => {
//     const params = { type: 'popular' }
//     const fetchPopular = sinon.spy()
//     expect(actions.fetchData(params)).to.equal(fetchPopular.calledOnce, true)
//   })
//   it('should alert user if they try to add a favorite without logging in', () => {
//     const movie = 'Crash'
//     const user = false
//     expect(actions.sendFavorite(movie, user)).to.deep.equal('you must login to add favorites')
//   })
// })
