import { combineReducers } from 'redux'

const initialState = {
  workout: {
    sets: [
      {reps: 8, weight: 135},
      {reps: 8, weight: 135},

    ]
  }
}


const reducer = (state=[], action) => {
  return state
}


const rootReducer = combineReducers({
  reducer
})

export default rootReducer