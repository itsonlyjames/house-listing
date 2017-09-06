import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Card from './';

const agency = {
  brandingColors: {
    primary: "#fcfa3b"
  },
  logo: "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
}

describe('<Card />', () => {
  it('passes image correctly to Card component', () => {
    const onClick = sinon.spy();
    const image = 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg';
    const wrapper = shallow(<Card image={image} agency={agency} />);
    expect(wrapper.dive().find('div').find('.house-image').props().src).to.have.lengthOf.above(1);
  });
});
