import React from 'react'
import {connect} from 'react-redux'
import SetContainer from './SetContainer'

import {startExercise, finishSet, adjustSet, goToSet, finishExercise} from '../actions/session'

const iconArrowRight = require('../static/images/icon-arrow-right@2x.png')
const iconCheck = require('../static/images/icon-check@2x.png')
const iconCheckCircle = require('../static/images/icon-check-circle@2x.png')
const avatarTrainer = require('../static/images/avatar-kelly@2x.png')


class SetsContainer extends React.Component {
  
  render() {
    const {dispatch, user, session} = this.props
    const exercise = session.routine[session.exercise]
    const finishedLastSet = (session.set == exercise.sets.length)

    return (
      <div className="sets-container" id="sets-container">
      
        <div className="sets-item">
          
          <div 
            className={"set-item-row set-start-first " +
            (session.set!==null ? "set-start-first-done" : '')}
            onClick={e=>dispatch(startExercise(session.exercise))}
          >
            {exercise.name}
            <img className="set-start-first-icon" src={iconArrowRight}/>
          </div>

        </div>

        {exercise.sets.map((set, index) => {
          return <SetContainer key={index} index={index} />
        })}

        <div className="sets-item">
          <div className={"set-item-row set-finish " +
            (finishedLastSet ? '': 'set-unfinished')} 
            onClick={e=>dispatch(finishExercise(session.exercise))}>
            Finish Exercise
          </div>
        </div>
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(SetsContainer);

