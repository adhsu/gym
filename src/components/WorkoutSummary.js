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
          
          <div className="workout-summary-top">
            <div className="workout-summary-title">Today's workout at a glance</div>
            
            <div className="workout-summary-stats">
              <span className="workout-summary-stats-section">
                <span>END:</span>
                <span className="workout-summary-box filled"></span>
                <span className="workout-summary-box"></span>
              </span>
              <span className="workout-summary-stats-section">
                <span>STR:</span>
                <span className="workout-summary-box filled"></span>
                <span className="workout-summary-box"></span>
                <span className="workout-summary-box"></span>
              </span>
              <span className="workout-summary-stats-section">
                <span>BF:</span>
                <span className="workout-summary-box"></span>
              </span>

            </div>

          </div>
          
          { workout.map(exercise => {
              return <WorkoutSummaryItem exercise={exercise} key={exercise.id} {...this.props} />
            })
          }
        </div>
      </div>
    )
  }
}
