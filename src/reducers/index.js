import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  form: reduxFormReducer
});

export default rootReducer;
