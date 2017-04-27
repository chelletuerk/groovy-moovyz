import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import FavoritesContainer, { mapStateToProps } from '../../public/app/containers/FavoritesContainer'

describe('FavoritesContainer', () => {
  xit('map state to props', () => {
    const wrapper = mount(<FavoritesContainer />)
    assert.isFunction(mapStateToProps);
  });
});
