import React from 'react';

class RowCol extends React.Component {
  render () {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        const classnames = (child.props.colClasses) ? child.props.colClasses : this.props.colClasses;
        return (<div className={classnames}>{child}</div>);
      }
    );
    return (
      <div className={this.props.rowClasses}>{childrenWithProps}</div>
    );
  }
}

RowCol.defaultProps = {
  colClasses: 6
};

RowCol.propTypes = {
  children: React.PropTypes.oneOfType(
    [
      React.PropTypes.element,
      React.PropTypes.arrayOf(React.PropTypes.element)
    ]
  ),
  rowClasses: PropTypes.string,
  colClasses: React.PropTypes.oneOfType(
    [
      React.PropTypes.string,
      React.PropTypes.number
    ]
  )
};

export default RowCol;
