import React from 'react'
import {connect} from 'react-redux'
import {nextExercise, goToExercise} from '../actions/session'

import quotes from '../constants/Quotes'
const map = require('../static/images/map.png')

class Finished extends React.Component {
  
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    
  }

  handleClick(e) {
    const {dispatch, session} = this.props
    e.preventDefault()
    dispatch(nextExercise(session.exercise))
  }

  render() {
    const {dispatch, session} = this.props
    const finishedWorkout = session.exercise >= session.routine.length-1

    if (finishedWorkout) {
      return (

        <div className="workout-finished-container">
          <div className="workout-finished-content"
            onClick={e=>dispatch(goToExercise(0))}>
            Workout complete.
          </div>
        </div>
      )
    }


    return (
      <div className="finished-container">
        <div className="finished-title h1">Nice job.</div>
        <div className="finished-quote">
          {quotes[Math.floor(Math.random()*quotes.length)]}
        </div>
        <img className="finished-map" src={map}/>

        <div className="finished-next-wrapper">
          <span className="finished-next-label">Next Station</span>
          <span className="finished-next-title h1">{session.routine[session.exercise+1].machine}</span>
        </div>

        <div className="finished-secretnext" onClick={this.handleClick}></div>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Finished);

