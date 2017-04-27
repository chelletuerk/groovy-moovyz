import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import LoginContainer, { mapStateToProps } from '../../public/app/containers/LoginContainer'

describe('LoginContainer', () => {
  xit('map state to props', () => {
    const wrapper = mount(<LoginContainer />)
    assert.isFunction(mapStateToProps);
  });
});
