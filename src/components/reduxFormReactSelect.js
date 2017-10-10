import React, { Component } from 'react';
import SelectInput from './SelectInput';
import { Field, reduxForm } from 'redux-form'
import { getData } from '../actions';
import { connect } from 'react-redux';

class ReduxFormReactSelect extends Component {

  // componentDidMount(){
      // TODO: load initial data
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
    // TODO: print values
  }

  handleOnChange = (event) => {
    // console.log('handleOnChange: ', event);
    // TODO: update reducer
  }

  handleOnInputChange = (newValue) => {
    this.props.getData(newValue);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={this.onFormSubmit} >

          <Field name="data" component={SelectInput} options={this.props.data}
                 handleOnChange={this.handleOnChange} handleOnInputChange={this.handleOnInputChange} />

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

export default connect(mapStateToProps, { getData })(ReduxFormReactSelect);
