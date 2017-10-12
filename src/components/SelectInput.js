import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

class SelectInput extends Component {

  onChange(object) {
    const {input: {onChange}} = this.props;
    if (onChange && object != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
      var selectedValue = object;
    } else {
      // Clear the input field
      var selectedValue = null;
    }
    onChange(selectedValue);
  }

  onInputChange(object) {
    this.props.handleInputChange(object);
  }

  render() {
    return (
      <Select {...this.props }
              value = { this.props.input.value || ''}
              onBlur = {() => this.props.input.onBlur(this.props.input.value) }
              onChange = { this.onChange.bind(this) }
              onInputChange = { this.onInputChange.bind(this) }
              options={ this.props.options}
      />
    );
  }
}

export default SelectInput;