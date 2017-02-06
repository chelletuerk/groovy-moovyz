import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import MovieIndex from '../../app/components/MovieIndex'

describe('MovieIndex', () => {

  it.skip('should have a state of draftMessage that is an empty string', () => {
    const wrapper = shallow(<MovieIndex />)
    expect(wrapper.state().draftMessage).to.deep.equal('');
  });

  it.skip('should have a button to select a favorite', () => {
   const wrapper = shallow(<MovieIndex/>);
   expect(wrapper.find('Button').length).to.equal(1);
 });

  it.skip('should allow props to be set', () => {
    const wrapper = mount(<MovieIndex prop="setProp" />);
    expect(wrapper.props().prop).to.equal("setProp");
    wrapper.setProps({ prop: "newProp" });
    expect(wrapper.props().prop).to.equal("newProp");
  });

  it.skip('should accept props', () => {
   const wrapper = mount(<MovieIndex props='props!'/>)
   expect(wrapper.props().props).to.equal('props!')
  });
});
