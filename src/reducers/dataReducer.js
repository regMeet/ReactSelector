import {DATA_SELECT, INITIAL_DATA} from '../actions';

const INITIAL_STATE = {
  data: [],
  initial: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
    case DATA_SELECT:
      var data = action.payload.data;
      const dataOptions = data.map(d => getDataParsed(d));
      return {...state, data: dataOptions};

    case INITIAL_DATA:
      const data = action.payload;
      const dataParsed = getInformationParsed(data);
      return {...state, initial: dataParsed };

    default:
      return state;
  }
}

const getInformationParsed = data => {
  return {
    ...data,
    detail: {
      ...data.detail,
      selector: getDataParsed(data.detail.selector)
    }
  }
};

/**
 * Parses object into some data that can be read by react-selector
 * @param data
 * @returns {{label, value}}
 */
const getDataParsed = data => {
  return {
    label: data.name,
    value: data.id
  }
}