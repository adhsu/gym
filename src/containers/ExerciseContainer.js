import React from 'react'
import {connect} from 'react-redux'

const avatarTrainer = require('../static/images/avatar-kelly@2x.png')

class ExerciseContainer extends React.Component {
  
  render() {
    const {user, session} = this.props
    const exercise = session.routine[session.exercise]
    
    return (
      <div className="exercise-container">
        <div className="exercise-video-wrapper">
          <video id="exercise-video" className="exercise-video" preload="auto" width="640" height="360" autoPlay loop muted>
        
            <source src={`./src/static/videos/${exercise.id}.mp4`} type="video/mp4" />
            {/* <source src={`videos/${w.id}.mp4`} type="video/mp4" /> */}
          </video>
        </div>
        
        <div className="exercise-description">{exercise.description}</div>
        
        <ul className="exercise-tips-ul">
          {exercise.tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>

      </div> 
    )
  }l
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(ExerciseContainer);

