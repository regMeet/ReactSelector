import React, { Component } from 'react';
import SelectInput from './SelectInput';
import { Field, reduxForm } from 'redux-form'
import { getDataSelector, getInitialData } from '../actions';
import { connect } from 'react-redux';

class ReduxFormReactSelect extends Component {

  constructor(props){
    super(props);

    this.props.getInitialData();
    console.log('this.props.initialValues.detail constructor', this.props.initialValues);
  }

  componentDidMount(){
    //this.props.getInitialData();
    console.log('this.props.initialValues.detail componentDidMount', this.props.initialValues);
    // this.props.getDataSelector(this.props.initialValues.detail);
  }

  componentWillMount(){
    console.log('this.props.initialValues.detail 222', this.props.initialValues);
  }

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
    this.props.getDataSelector(newValue);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <form onSubmit={this.onFormSubmit} >

          <Field name="detail" component={SelectInput} options={this.props.data}
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
  console.log('state.dataReducer.initial', state.dataReducer.initial)

  return {
    data: state.dataReducer.data,
    initialValues: state.dataReducer.initial
  }
}

ReduxFormReactSelect = reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(ReduxFormReactSelect)

export default connect(mapStateToProps, { getDataSelector, getInitialData })(ReduxFormReactSelect);
