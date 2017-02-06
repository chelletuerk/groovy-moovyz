import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import MovieIndex from '../../app/components/MovieIndex'

describe('MovieIndex', () => {
  const fakeArray = { favorites: [{ key: 'val' }, { twokey: 'twoval' }, { threekey: 'threeval' }] }
  const fakeMovies = { movies: [{ key: 'val' }, { popularMovies: ['movie1', 'movie2', 'movie3'] }, { threekey: 'threeval' }] }
  const fetchData = sinon.spy()
  it('should have a state of draftMessage that is an empty string', () => {
    const wrapper = shallow(<MovieIndex
      movies={fakeMovies} favorites={fakeArray} fetchData={fetchData} />)
    expect(wrapper.state().draftMessage).to.deep.equal('');
  });

  it('should have a button to load favorites', () => {
    const wrapper = shallow(<MovieIndex
    movies={fakeMovies} favorites={fakeArray} fetchData={fetchData}/>);
    expect(wrapper.find('.favorites').length).to.equal(1);
  });

  it.skip('should render a list of movies on load', () => {
    const wrapper = mount(<MovieIndex
      movies={fakeMovies} favorites={fakeArray} fetchData={fetchData} />);
    expect(wrapper.find('li')).to.have.length(3)
  });

  it('should fetch movies from the api on load', () => {
    const wrapper = mount(<MovieIndex
      movies={fakeMovies} favorites={fakeArray} fetchData={fetchData}/>)
    assert.equal(fetchData.calledOnce, true);
  });
});
