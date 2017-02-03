import App from './components/App'

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';

describe('app', () => {
  it.skip('should render login screen correctly', () => {
    let wrapper = shallow(<App/>);
    expect(wrapper.find('h1')).to.have.length(1);
    expect(wrapper.text()).to.equal('Groovie Moives<h1 />');
  });
})
