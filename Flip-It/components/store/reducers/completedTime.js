let initialState = 0;

//Actions
const COMPLETED_TIME = 'COMPLETED_TIME';

//Action Creators
export function completionTime(time) {
  const action = { type: COMPLETED_TIME, time };
  return action;
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case COMPLETED_TIME:
      newState = action.time;
      return newState;

    default:
      return newState;
  }
}
