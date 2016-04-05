import React from 'react'
import WorkoutSummaryItem from './WorkoutSummaryItem'

export default class WorkoutSummary extends React.Component {
  render() {
    const {toggle, currentWorkout, workout} = this.props
    return (
      <div className="workout-summary">
        <div className="workout-summary-backdrop" onClick={e=>toggle()}>
        </div>
        <div className="workout-summary-bar">
          { workout.map(exercise => {
              return <WorkoutSummaryItem exercise={exercise} key={exercise.id} />
            })
          }
        </div>
      </div>
    )
  }
}
