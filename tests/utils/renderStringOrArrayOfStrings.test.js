import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import { renderStringOrArrayOfStrings } from '../../src/utils/renderStringOrArrayOfStrings';

describe("renderStringOrArrayOfStrings", function() {
  it("should return nothing when nothing is passed to it", function() {
  	const result = renderStringOrArrayOfStrings();
    expect(result).to.equal(undefined);
  });

  it("should return a div with the string when a string is passed to it", function() {
  	const result = renderStringOrArrayOfStrings('render this');
    expect(shallow(result).contains(<div>render this</div>)).to.equal(true);;
  });

  it("should return a div with the content string when an object is passed to it", function() {
  	const result = renderStringOrArrayOfStrings({ content: 'render this' });
    expect(shallow(result).contains(<div>render this</div>)).to.equal(true);;
  });

  it("should return three divs with the content strings when an array of objects is passed to it", function() {
  	const properties = [
  		{ content: 'render this first' },
  		{ content: 'render this second' },
  		{ content: 'render this third' }
  	]

  	const result = renderStringOrArrayOfStrings(properties);

    expect(shallow(result[0]).contains(<div>render this first</div>)).to.equal(true);;
    expect(shallow(result[1]).contains(<div>render this second</div>)).to.equal(true);;
    expect(shallow(result[2]).contains(<div>render this third</div>)).to.equal(true);;
  });
});