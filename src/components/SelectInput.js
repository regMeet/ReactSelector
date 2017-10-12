import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

class SelectInput extends Component {

  onChange(object) {
    const {input: {onChange}} = this.props;
    onChange(object);
  }

  onInputChange(object) {
    this.props.handleInputChange(object);
    return object;
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