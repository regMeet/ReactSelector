import {DATA_SELECT} from '../actions';

const INITIAL_STATE = {
  data: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case DATA_SELECT:
      return {...state, data: action.payload.data};
    default:
      return state;
  }

}