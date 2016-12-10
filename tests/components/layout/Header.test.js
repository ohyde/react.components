import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Header from '../../../src/components/layout/Header';

describe("Header", () => {
  it("should render", () => {
    const mountedHeader = shallow(<Header />);
    expect(mountedHeader).to.not.equal(undefined);
  });

  
});
