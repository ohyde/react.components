import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import R from 'ramda';

import NDivs from '../../../src/components/layout/NDivs';

const prepareComponent = (mocks) => {
  const props = {
    children: 'hello world'
  };

  return props;
}

describe("NDivs", () => {
  it("should render", () => {
    const props = prepareComponent();
    const mountedNDivs = shallow(<NDivs {...props} />);
    expect(mountedNDivs.html()).to.equal('<div><div><div class="container"><div class="row"><div class="small-12 columns">hello world</div></div></div><div></div></div>');
  });


});
