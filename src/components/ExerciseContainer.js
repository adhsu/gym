import React from 'react'
const woman = require('../static/images/woman.png')
// const video = require('../static/videos/0.mp4')

export default class ExerciseContainer extends React.Component {
  
  render() {
    const {currentWorkout, workout} = this.props
    const w = workout[currentWorkout.currentExercise]
    
    return (
      <div className="exercise-container">
        <div className="exercise-name h1">{w.name}</div>
        <div className="exercise-description">{w.description}</div>

        <video id="exercise-video" className="exercise-video" preload="auto" width="640" height="360" autoPlay loop muted controls>
          {/* <source src={`./src/static/videos/${w.id}.mp4`} type="video/mp4" /> */}
          <source src={`videos/${w.id}.mp4`} type="video/mp4" />
        </video>

      </div> 
    )
  }l
}

