import React, { PropTypes } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import R from 'ramda';

export class Header extends React.Component {
  constructor (props) {
    super(props);
    this.renderSecond = this.renderSecond.bind(this);
    this.renderElement = this.renderElement.bind(this);
  }

  renderSecond () {
    if (_.isNil(this.props.second)) { return; }

    if (_.isArray(this.props.second)) {
      const mapIndexed = R.addIndex(R.map);
      return mapIndexed((content, i) => {
        return (<p key={i}>{content}</p>);
      }, this.props.second);
    }

    return (<p key={i}>{this.props.second}</p>);
  }

  renderElement (propName) {
    if (_.isNil(this.props[propName])) { return; }
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
          {this.renderSecond()}
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
