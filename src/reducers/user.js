import * as types from '../constants/ActionTypes';
import update from 'react-addons-update'

const initialState = {
  name: "Andrew",
  bpm: 82,
  trainer: "Kelly"
}

export default function user(state=initialState, action) {
  switch(action.type) {

    default:
      return state

  }
}


