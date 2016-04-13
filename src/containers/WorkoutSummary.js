import React from 'react'
import {connect} from 'react-redux'
import WorkoutSummaryItem from '../components/WorkoutSummaryItem'

import {toggleShowWorkout, goToExercise} from '../actions/session'


class WorkoutSummary extends React.Component {
  
  render() {
    const {dispatch, session} = this.props
    return (
      <div className="workout-summary">
        <div className="workout-summary-backdrop" 
          onClick={e=>dispatch(toggleShowWorkout())}>
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
          
          { session.routine.map(exercise => {
              return <WorkoutSummaryItem exercise={exercise} key={exercise.id} {...this.props} goToExercise={goToExercise} toggleShowWorkout={toggleShowWorkout} />
            })
          }
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(WorkoutSummary);

