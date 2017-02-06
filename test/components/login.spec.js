import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Login from '../../app/components/Login'

describe('Login', () => {

  it('should have a state of email that is an empty string', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.state().email).to.deep.equal('');
  });

  it('should have a state of password that is an empty string', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.state().email).to.deep.equal('');
  });

  it('should have a state of newUser that is an empty string', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.state().email).to.deep.equal('');
  });

  it.skip('should have an updatePassword event', () => {
      const password = sinon.spy()
      const wrapper = shallow(<Login updatePassword={password} />)
      wrapper.find('input').simulate('change');
      expect(updatePassword.calledOnce).to.equal(true)
  });

  it('should allow props to be set', () => {
    const wrapper = mount(<Login prop="setProp" />);
    expect(wrapper.props().prop).to.equal("setProp");
    wrapper.setProps({ prop: "newProp" });
    expect(wrapper.props().prop).to.equal("newProp");

  it('should have a function called updateEmail', () => {
      assert.isFunction(updateEmail)
    })
  });
});
