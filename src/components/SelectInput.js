import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

class SelectInput extends Component {

  constructor(props) {
    super(props);

    console.log('this.props.input.value', this.props.input.value);

    this.state = {
      value: null,
    }
  }

  componentDidMount(){
    const initialValue = this.props.input.value;
    console.log('initialValue: ', initialValue);

    if (initialValue) {
      this.props.handleOnInputChange(initialValue.label);
    }
  }

  onChange(object) {
    console.log(object);

    const {input: {onChange}} = this.props;
    const selectedValue = object.value;

    this.setState({value: selectedValue}, () => onChange(selectedValue));
    // if (this.props.input.onChange && object != null) {
    //   console.log('changed: ', object.value);
    //   // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
    //   this.props.input.onChange(object.value);
    // } else {
    //   console.log('cleared');
    //   // Clear the input field
    //   this.props.input.onChange(null)
    // }

    //this.props.handleOnChange(object);
  }

  onInputChange(object) {
    object && this.props.handleOnInputChange(object);
  }

  render() {
    return (
      <Select {...this.props }
              value = { this.state.value || this.props.input.value}
              onBlur = {() => this.props.input.onBlur(this.props.input.value) }
              onChange = { this.onChange.bind(this) }
              onInputChange = { this.onInputChange.bind(this) }
              options={this.props.options}
      />
    );
  }
}

export default SelectInput;