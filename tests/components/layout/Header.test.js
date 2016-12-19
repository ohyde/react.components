import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import R from 'ramda';

import Header from '../../../src/components/layout/Header';

const prepareComponent = (mocks) => {
  const props = {
    first: R.propOr('Hello World', 'first', mocks),
    boxClasses: R.propOr(['topLevelDiv'], 'boxClasses', mocks),
    second: R.propOr('Goodbye World', 'second', mocks),
    secondClasses: R.propOr(['Goodbye World'], 'secondClasses', mocks),
  };

  return props;
}

describe("Header", () => {
  it("should render", () => {
    const props = prepareComponent();
    const mountedHeader = shallow(<Header {...props} />);
    expect(mountedHeader.html()).to.equal('<div class="topLevelDiv"><div class="">Hello World</div><div class="Goodbye World"><div>Goodbye World</div></div></div>');
  });

});
