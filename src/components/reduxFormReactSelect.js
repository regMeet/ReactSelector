import React, { Component } from 'react';
import SelectInputAsync from './SelectInputAsync';
import { Field, reduxForm } from 'redux-form'
import { getData } from '../actions';
import { connect } from 'react-redux';

class ReduxFormReactSelect extends Component {

  logChange = (val) => {
    console.log("Selected: " + JSON.stringify(val));
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} >
          <Field name="country" component={SelectInputAsync} url='https://api.myjson.com/bins/4gzai'  />
        </form>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    streets: state.dataReducer.streets
  }
}

ReduxFormReactSelect = reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(ReduxFormReactSelect)

export default connect(mapStateToProps, { getData })(ReduxFormReactSelect);
