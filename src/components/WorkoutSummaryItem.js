import React from 'react'
const iconCheckCircleGreen = require('../static/images/icon-check-circle-green@2x.png')


export default class WorkoutSummaryItem extends React.Component {
  
  render() {
    const {exercise, currentWorkout, workout} = this.props
    return (
      <div className={"workout-summary-item " +
        (exercise.id==currentWorkout.currentExercise ? 'active ' : '') +
        (exercise.completed ? 'completed ' : '')}>
        <img className="workout-summary-item-image" 
          src={require(`../static/images/icon-workout-${exercise.id}.jpg`)}/>
        <div className="workout-summary-item-name">{exercise.name}</div>
        <div className="workout-summary-item-description">{exercise.description}</div>
        <div className="workout-summary-item-completed">
          <img src={iconCheckCircleGreen} />
        </div>
      </div>
    )
  }
}
