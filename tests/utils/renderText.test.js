import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import { renderText } from '../../src/utils/renderText';

describe("renderText", () => {
  it("should return nothing when nothing is passed to it", () => {
  	const result = renderText();
    expect(result).to.equal(undefined);
  });

  describe('rendering a string', () => {
    it("should return a div with the string when a string is passed to it", () => {
      const result = renderText('render this');
      expect(shallow(result).contains(<div>render this</div>)).to.equal(true);;
    });
  })

  describe('rendering an array', () => {
    it("should return three divs with the text strings when an array of objects is passed to it", () => {
      const properties = [
        { text: 'render this first' },
        { text: 'render this second' },
        { text: 'render this third' }
      ]

      const result = renderText(properties);

      expect(result[0].props.children).to.equal(properties[0].text);
      expect(result[1].props.children).to.equal(properties[1].text);
      expect(result[2].props.children).to.equal(properties[2].text);
    });
  })

  describe('rendering an object', () => {
    it("should return a div with the text string when an object is passed to it", () => {
      const result = renderText({ text: 'render this' });
      expect(result.props.children).to.equal('render this');
    });

    it("should return nothing when an object is passed without the text property to it", () => {
      const result = renderText({ wrongKey: 'render this' });
      expect(result).to.equal(undefined);
    });
  })

});
