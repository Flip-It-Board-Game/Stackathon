let initialState = 0;

//Actions
const NOW_TIME = 'NOW_TIME';

//Action Creators
export function setTime(time) {
  const action = { type: NOW_TIME, time };
  return action;
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case NOW_TIME:
      newState = action.time;
      return newState;

    default:
      return newState;
  }
}
