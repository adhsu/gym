import React from 'react'
const woman = require('../static/images/woman.png')

export default class ExerciseContainer extends React.Component {
  
  render() {
    const {currentWorkout, workout} = this.props

    return (
      <div className="exercise-container">
        <div className="exercise-name h1">{workout[currentWorkout.currentExercise].name}</div>
        <div className="exercise-description">{workout[currentWorkout.currentExercise].description}</div>
        <img className="exercise-image" src={woman}/>
      </div> 
    )
  }l
}

