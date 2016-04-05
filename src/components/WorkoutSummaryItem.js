import React from 'react'

export default class WorkoutSummaryItem extends React.Component {
  
  render() {
    const {exercise} = this.props
    return (
      <div>
        {exercise.name}
      </div>
    )
  }
}
