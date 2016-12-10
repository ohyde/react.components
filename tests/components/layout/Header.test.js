import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Header from '../../../src/components/layout/Header';

describe("Header", () => {
  it("should render", () => {
    const mountedHeader = shallow(<Header
      first="Hello World"
      boxClasses={['topLevelDiv']}
      second="Goodbye World" />
    );
    expect(mountedHeader.html()).to.equal('<div class="topLevelDiv"><div class="">Hello World</div><div class=""><div>Goodbye World</div></div></div>');
  });


});
