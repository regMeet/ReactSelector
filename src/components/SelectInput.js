import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

class SelectInput extends Component {

  constructor(props) {
    super(props);

    console.log('this.props.input.value', this.props.input.value);

    this.state = {
      value: null,
      options: []
    }
  }

  componentWillReceiveProps({input: {value}, options}){
    if (value && options && options.length === 0){
      this.props.handleOnInputChange(value.label);
    }
    // FIXME: do I have to call setState?
    // const {input: {onChange}} = this.props;
    // this.setState({value: value, options:options}, () => onChange(value));
  }

  onChange(object) {
    console.log(object);

    // const {input: {onChange}} = this.props;
    // const selectedValue = object.value; //object can be null when it's cleared
    // onChange(selectedValue);

    const {input: {onChange}} = this.props;
    if (this.props.input.onChange && object != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"

      //this.props.input.onChange(object.value);
      var selectedValue = object.value;
      console.log('selectedValue: ', selectedValue);

    } else {
      console.log('cleared');
      // Clear the input field
      // this.props.input.onChange(null)
      var selectedValue = null;
    }
    this.setState({value: selectedValue, options:[]}, () => onChange(selectedValue));
    // FIXME: once selected it, should I reset the main options?
    //this.props.handleOnChange(object);
  }

  onInputChange(object) {
    object && this.props.handleOnInputChange(object);
  }

  //FIXME: update options when input value changed and options is empty - initial values
  render() {
    return (
      <Select {...this.props }
              value = { this.state.value || this.props.input.value}
              onBlur = {() => this.props.input.onBlur(this.props.input.value) }
              onChange = { this.onChange.bind(this) }
              onInputChange = { this.onInputChange.bind(this) }
              options={ this.props.options}
      />
    );
  }
}

export default SelectInput;