//Default State
const width = 5;
const height = 5;
const totalSquares = width * height;

let boolArray = [];
for (let i = 0; i < totalSquares; i++) {
  boolArray.push(true);
}

let initialState = boolArray;

//Actions
const NEW_ARRAY = 'NEW_ARRAY';
const RESET = 'RESET';
const SET_BOARD = 'SET_BOARD';

//Action Creators
export function newArray(array) {
  const action = { type: NEW_ARRAY, array };
  return action;
}

export function setBoard(board) {
  let newBoolArray = [];
  let newTotalSquares = board.width * board.height;
  for (let i = 0; i < newTotalSquares; i++) {
    newBoolArray.push(true);
  }
  let newBoard = newBoolArray;
  const action = { type: SET_BOARD, newBoard };
  return action;
}

export function reset() {
  const action = { type: RESET };
  return action;
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = Object.assign([], state);

  switch (action.type) {
    case NEW_ARRAY:
      newState = action.array;
      return newState;

    case RESET:
      newState = initialState;
      return newState;

    case SET_BOARD:
      newState = action.newBoard;
      return newState;

    default:
      return newState;
  }
}
