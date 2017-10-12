import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import debounce from 'lodash.debounce';

class SelectInput extends Component {

  constructor(props) {
    super(props);
    //this.onInputChange = debounce(this.onInputChange, 500);
  }

  onChange = (object) => {
    const {input: {onChange}} = this.props;
    onChange(object);

    if(!object) {
      this.props.handleInputChange(object);
    }
  };

  onInputChange = (inputValue) => {
    if (inputValue && inputValue.length > 2) {
      this.props.handleInputChange(inputValue);
    }

    return inputValue;
  };

  render() {
    return (
      <Select {...this.props }
              value = { this.props.input.value || ''}
              onBlur = {() => this.props.input.onBlur(this.props.input.value) }
              onChange = { this.onChange }
              onInputChange = { this.onInputChange }
              options={ this.props.options}
      />
    );
  }
}

export default SelectInput;