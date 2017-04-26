import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Favorites from '../../app/components/Favorites'


describe('Favorites', () => {
  const fakeArray = { favorites: [{ key: 'val' }, { favorites: ['movie1', 'movie2', 'movie3'] }, { threekey: 'threeval' }] }
  const fakeMovies = { movies: [{ key: 'val' }, { popularMovies: ['movie1', 'movie2', 'movie3'] }, { threekey: 'threeval' }] }
  const fetchData = sinon.spy()
  it('should have a button to delete a favorite', () => {
    const wrapper = shallow(<Favorites
    movies={fakeMovies} favorites={fakeArray} fetchData={fetchData}/>);
    expect(wrapper.find('.deleteFave').length).to.equal(3);
  });

  it('should render a list of favorite movies', () => {
    const wrapper = mount(<Favorites
      movies={fakeMovies} favorites={fakeArray} fetchData={fetchData} />);
    expect(wrapper.find('li')).to.have.length(3)
  });

  it('should render a message of having no favorites when none present', () => {
    const fakeEmpty = { favorites: [{ favorites: [] }] }
    const wrapper = mount(<Favorites
      movies={fakeMovies} favorites={fakeEmpty} fetchData={fetchData}/>)
    expect(wrapper.find('h4').text()).to.equal('You have no favorites');
  });
});
