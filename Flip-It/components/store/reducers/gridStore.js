const userInput = 4
const width = 2
const height = 2
const totalSquares = width * height

let boolArray = []
for (let i = 0; i < totalSquares; i++) {
  boolArray.push(true)
}

const initialState = boolArray

//Actions
const NEW_ARRAY = 'NEW_ARRAY'

//Action Creators
export function newArray(array) {
  const action = { type: NEW_ARRAY, array }
  return action
}

//Reducer
export default function reducer(state = initialState, action) {
  let newState = Object.assign([], state)

  switch (action.type) {
    case NEW_ARRAY:
      newState = action.array
      return newState

    default:
      return newState
  }
}
