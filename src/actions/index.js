export const DATA_SELECT = 'DATA_SELECT';
export const INITIAL_DATA = 'INITIAL_DATA';

export function getDataSelector (partialName) {
  return {
    type: DATA_SELECT,
    payload: {
      "data": [
        {
          "name": partialName+"a",
          "id": "1"
        },
        {
          "name": partialName+"b",
          "id": "2"
        },
        {
          "name": partialName+"c",
          "id": "3"
        }
      ]
    }
  }
}

export function getInitialData(partialName) {
  return {
    type: INITIAL_DATA,
    payload: {
      "detail": {
        "name": "alan",
        "id": "12345"
      }
    }
  }
}