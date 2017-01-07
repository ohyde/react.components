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
      const result = shallow(renderText('render this'));
      expect(result.html()).to.equal('<div>render this</div>');
    });
  })

  describe('rendering an array', () => {
    it("should return three divs with the text strings when an array of objects is passed to it", () => {
      const properties = [
        { text: 'render this first' },
        { text: 'render this second' },
        { text: 'render this third' }
      ]

      const result = shallow(renderText(properties));
      // result.children().forEach((node) => {
      //   console.log(node.html());
      // });
      expect(result.html()).to.equal('<div><div>render this first</div><div>render this second</div><div>render this third</div></div>');
    });
  })

  describe('rendering an object', () => {
    it("should return a div with the text string when an object is passed to it", () => {
      const result = shallow(renderText({ text: 'render this', classes: 'hello' }));
      expect(result.html()).to.equal('<div class="hello">render this</div>');
    });

    it("should return nothing when an object is passed without the text property to it", () => {
      const result = renderText({ wrongKey: 'render this' });
      expect(result).to.equal(undefined);
    });

    it("should return a react component with the text inside a dynamic container when element is passed", () => {
      const result = shallow(renderText({ element: 'span', text: 'render this', classes: 'test' }));
      expect(result.html()).to.equal('<span class="test">render this</span>');
    });
  })

});
