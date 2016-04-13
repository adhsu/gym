import * as types from '../constants/ActionTypes';
import update from 'react-addons-update'
import backBiRoutine from '../constants/Routines'

const initialState = {
  waiting: false, //  machine waiting screen
  exercise: 0,
  set: null, // null if you haven't started yet, number after
  resting: false, // resting mode after a set
  finished: false, // finished exercise, show map to next machine
  
  showWorkoutSummary: false, // show workout details/summary

  secondsElapsed: 0,
  length: 60, // workout length in minutes

  routine: backBiRoutine
}

export default function session(state=initialState, action) {
  switch(action.type) {

    // action types:
    // TOGGLE_SHOW_WORKOUT
    // CONFIRM_IDENTITY
    // FINISH_SET
    // ADJUST_SET
    // GO_TO_SET

    case types.TOGGLE_SHOW_WORKOUT:
      return Object.assign({}, state, {
        showWorkoutSummary: !state.showWorkoutSummary
      })

    case types.CONFIRM_IDENTITY:
      return Object.assign({}, state, {
        waiting: false
      })

    case types.FINISH_SET:
      // exerciseId, setId, setHasRest=true
      const set = state.routine[action.exerciseId].sets[action.setId]
      const setHasRest = ("rest" in set)

      if (setHasRest && !state.resting) {
        // if set has rest and we're not resting, start resting
        return update(state, {
          resting: {$set: true},
          routine: {
            [action.exerciseId]: {
              sets: {
                [action.setId]: {
                  completed: {$set: true}
                }
              }
            }
          }
        })

      } else {
        // advance to next set and scroll DOM
        return update(state, {
          set: {$apply:set=>set+1},
          resting: {$set: false},
          routine: {
            [action.exerciseId]: {
              sets: {
                [action.setId]: {
                  completed: {$set: true}
                }
              }
            }
          }
        })
        scrollActiveSet(state.exercise, state.set)
      }


    case types.ADJUST_SET:
      return update(state, {
        routine: {
          [action.exerciseId]: {
            sets: {
              [action.setId]: {
                [action.key]: {
                  $apply: n=>n+parseInt(action.delta)
                }
              }
            }
          }
        }
      })

    case types.GO_TO_SET:
      return Object.assign({}, state, {
        exercise: action.exerciseId,
        set: action.setId,
        resting: false
      })

    // START_EXERCISE
    // FINISH_EXERCISE
    // GO_TO_EXERCISE
    // NEXT_EXERCISE

    case types.START_EXERCISE:
      return Object.assign({}, state, {
        set: 0
      })

    case types.FINISH_EXERCISE:
      return Object.assign({}, state, {
        resting: false,
        finished: true
      })

    case types.NEXT_EXERCISE:
      return update(state, {
        waiting: {$set: true},
        exercise: {$apply:e=>e+1},
        set: {$set: null},
        resting: {$set: false},
        finished: {$set: false},
        showWorkoutSummary: {$set: false},
        routine: {
          [action.exerciseId]: {
            completed: {$set: true}
          }
        }
      })

    case types.GO_TO_EXERCISE:
      return Object.assign({}, state, {
        waiting: true,
        exercise: action.exerciseId,
        set: null,
        resting: false,
        finished: false,
        showWorkoutSummary: false
      })

    default:
      return state
      
  }
}

function scrollActiveSet(exercise, set) {
  setTimeout(()=> {
    if (set < this.state.workout[exercise].sets.length-1) {
      var active = document.getElementById('set-active')
      var container = document.getElementById('sets-container')
      var activeRect = active.getBoundingClientRect()
      var containerRect = container.getBoundingClientRect()
      var delta = activeRect.bottom - containerRect.bottom
      // console.log('delta is ', delta)
      if (delta > 0) {
        // container.scrollTop += delta
        $(container).animate({scrollTop: container.scrollTop+delta})
      }
    }   
  }, 10)
}

