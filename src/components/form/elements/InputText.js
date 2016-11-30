import React from 'react';
import classnames from 'classnames';

class InputText extends React.Component {

  constructor(props) {
    super(props);
    
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    this.props.onChange(event, this.props.id);
  }

  onBlur(event) {
    this.props.onBlur(event);
  }

  render() {
    const classes = classnames(this.props.classes);
    
    return (
      <input {...this.props}
        type="text"
        className={classes}
        id={this.props.id}
        value={this.state.value}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}

InputText.propTypes = {
  id: React.PropTypes.string,
  classes: React.PropTypes.array,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  placeholder: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
};

InputText.defaultProps = {
  id: '',
  classes: [],
  value: '',
  onChange: () => {},
  onBlur: () => {},
};

export default InputText;