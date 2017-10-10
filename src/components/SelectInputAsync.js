import React, { Component, PropTypes } from 'react'
import axios from 'axios';
import Select from 'react-select'

class SelectInputAsync extends Component {
  constructor(props) {
    super(props)
    this.url = this.props.url
  }
  getOptions() {
    return axios.get(this.url).then((response) => {
      return { options: response.data }
    })
  }
  onChange(event) {
    // console.log(event)

    if (this.props.input.onChange && event != null) {
      // To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
      this.props.input.onChange(event.value);
    } else {
      // Clear the input field
      this.props.input.onChange(null)
    }
  }

  render() {
    return (
      <Select.Async {...this.props }
                    value = { this.props.input.value || '' }
                    onBlur = {() => this.props.input.onBlur(this.props.input.value) }
                    onChange = { this.onChange.bind(this) }
                    loadOptions = { this.getOptions.bind(this) }
      />
    );
  }
}

export default SelectInputAsync;