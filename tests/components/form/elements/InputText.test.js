import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import R from 'ramda';

import InputText from '../../../../src/components/form/elements/InputText';

const prepareComponent = (mocks) => {
  const props = {
    placeholder: R.propOr('input placeholder', 'placeholder', mocks),
    id: R.propOr('inputId', 'id', mocks),
    value: R.propOr('inputValue', 'value', mocks),
    classes: R.propOr(['test'], 'classes', mocks)
  };

  return props;
}

describe("InputText", () => {
  it("should render", () => {
    const props = prepareComponent();
    const mountedInputText = shallow(<InputText {...props} />);
    expect(mountedInputText.html()).to.equal('<input type="text" class="test" id="inputId" value="inputValue" placeholder="input placeholder"/>');
  });
});
