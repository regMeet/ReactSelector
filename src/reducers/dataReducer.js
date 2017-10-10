import {DATA_SELECT} from '../actions';

const INITIAL_STATE = {
  data: [],
  initial: {
    detail: {
      label: 'alan',
      value: 12345
    }
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case DATA_SELECT:
      var data = action.payload.data;

      const dataOptions = data.map(
        d => ({
          label: d.name,
          value: d.id
        }));

      return {...state, data: dataOptions};

    case INITIAL_DATA:
      var data = action.payload.data;
      // TODO: update

      return {...state, initial: data};

    default:
      return state;
  }

}
