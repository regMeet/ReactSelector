import React, { Component } from 'react';
import SelectInput from './SelectInput';
import { Field, reduxForm } from 'redux-form'
import { getDataSelector, getInitialData } from '../actions';
import { connect } from 'react-redux';
import { alphaNumeric, required, phoneNumber, email, number } from '../utils/validator'

class ReduxFormReactSelect extends Component {

  constructor(props){
    super(props);
    this.props.getInitialData();
  }

  onFormSubmit = (values) => {
    console.log('handleSubmit selector: ', values.detail.selector);
    console.log('handleSubmit normal: ', values.detail.normal);
    console.log(' ');
  }

  renderSelectorField =  ({input, label, options, handleInputChange, meta: { touched, error, warning }}) => {
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <SelectInput
            input={{...input}}
            options={options}
            handleInputChange={handleInputChange}
          />
          {touched &&
          ((error &&
            <span>
            {error}
          </span>) ||
            (warning &&
              <span>
              {warning}
            </span>))}
        </div>
      </div>
    );
  }

  renderField = ( {input, label, placeholder, type, meta: { touched, error, warning } }) => {
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={placeholder} type={type} />
          {touched &&
          ((error &&
            <span>
            {error}
          </span>) ||
            (warning &&
              <span>
              {warning}
            </span>))}
        </div>
      </div>
    );
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit)} >

          <Field
            name="detail.selector"
            component={this.renderSelectorField}
            label="Selector Field:"
            validate={[required]}
            warn={alphaNumeric}
            options={this.props.data}
            handleInputChange={this.props.getDataSelector}
          />

          <Field
            name="detail.normal"
            type="text"
            component={this.renderField}
            label="Normal Field:"
            validate={[required, alphaNumeric]}
            warn={alphaNumeric}
          />

          <button type="submit" disabled={submitting}>
            Enviar nuevos datos
          </button>

          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Volver valores
          </button>
        </form>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.dataReducer.data,
    initialValues: state.dataReducer.initial
  }
}

ReduxFormReactSelect = reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(ReduxFormReactSelect)

export default connect(mapStateToProps, { getDataSelector, getInitialData })(ReduxFormReactSelect);
