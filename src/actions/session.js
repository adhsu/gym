import * as types from '../constants/ActionTypes';

// action types:
// TOGGLE_SHOW_WORKOUT
// CONFIRM_IDENTITY
// FINISH_SET
// ADJUST_SET
// GO_TO_SET

export function toggleShowWorkout() {
  return {
    type: types.TOGGLE_SHOW_WORKOUT
  }
}

export function confirmIdentity() {
  return {
    type: types.CONFIRM_IDENTITY
  }
}

export function finishSet(exerciseId, setId) {
  return {
    type: types.FINISH_SET,
    exerciseId, setId
  }
}

export function adjustSet(exerciseId, setId, key, delta) {
  return {
    type: types.ADJUST_SET,
    exerciseId, setId, key, delta
  }
}

export function goToSet(exerciseId, setId) {
  return {
    type: types.GO_TO_SET,
    exerciseId, setId
  }
}

// START_EXERCISE
// FINISH_EXERCISE
// GO_TO_EXERCISE
// NEXT_EXERCISE

export function startExercise(exerciseId) {
  return {
    type: types.START_EXERCISE,
    exerciseId
  }
}

export function finishExercise(exerciseId) {
  return {
    type: types.FINISH_EXERCISE,
    exerciseId
  }
}

export function nextExercise(exerciseId) {
  return {
    type: types.NEXT_EXERCISE,
    exerciseId
  }
}

export function goToExercise(exerciseId) {
  return {
    type: types.GO_TO_EXERCISE,
    exerciseId
  }
}
