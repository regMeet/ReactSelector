import {DATA_SELECT, INITIAL_DATA} from '../actions';

const INITIAL_STATE = {
  data: [],
  initial: null
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
      const data = action.payload;

      const dataParsed = {
        ...data,
        detail: {
          label: data.detail.name,
          value: data.detail.id,
        }
      };

      return {
        ...state,
        initial: dataParsed
      };

    default:
      return state;
  }

}
