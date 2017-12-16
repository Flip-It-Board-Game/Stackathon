let initialState = { count: 0 };

//Actions
const COUNTER = 'COUNTER';

//Action Creators
export function setCount(num) {
  const action = { type: COUNTER, num };
  return action;
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case COUNTER:
      newState = action.num;
      return newState;

    default:
      return newState;
  }
}
