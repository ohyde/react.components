import React, { PropTypes } from 'react';
import classnames from 'classnames';
import R from 'ramda';
import { renderText } from '../../utils/renderText';

class Header extends React.Component {
  constructor (props) {
    super(props);
    
    this.renderElement = this.renderElement.bind(this);
  }

  renderElement (propName) {
    if (R.isNil(this.props[propName])) { return; }
    return this.props[propName];
  }

  render () {
    const boxClasses = classnames(this.props.boxClasses);
    const firstClasses = classnames(this.props.firstClasses);
    const secondClasses = classnames(this.props.secondClasses);

    return (
      <div className={boxClasses}>
        <div className={firstClasses}>{this.props.first}/></div>
        <div className={secondClasses}>
          {renderText(this.props.second)}
        </div>
        {this.renderElement('afterSecond')}
      </div>
    );
  }
}

Header.propTypes = {
  boxClasses: React.PropTypes.array,
  firstClasses: React.PropTypes.array,
  secondClasses: React.PropTypes.array,
  first: PropTypes.string.isRequired,
  second: React.PropTypes.oneOfType(
    [
      React.PropTypes.string.isRequired,
      React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
    ]
  ),
  afterSecond: React.PropTypes.oneOfType(
    [
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element)
    ]
  )
};

export default Header;
