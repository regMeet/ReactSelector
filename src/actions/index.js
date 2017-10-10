export const DATA_SELECT = 'DATA_SELECT';

export function getData (partialName) {
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