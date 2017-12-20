const initialState = { width: 5, height: 5 };

//Actions
const WIDTH_HEIGHT = 'WIDTH_HEIGHT';

//Action Creators
export function setDimensions(board) {
  const action = { type: WIDTH_HEIGHT, board };
  return action;
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case WIDTH_HEIGHT:
      newState = action.board;
      return newState;

    default:
      return newState;
  }
}
