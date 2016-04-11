import React from 'react'
import Set from './Set'

const iconArrowRight = require('../static/images/icon-arrow-right@2x.png')
const iconCheck = require('../static/images/icon-check@2x.png')
const iconCheckCircle = require('../static/images/icon-check-circle@2x.png')

const avatarTrainer = require('../static/images/avatar-kelly@2x.png')


export default class SetsContainer extends React.Component {
  
  constructor() {
    super()
    this.next = this.next.bind(this)
    this.finish = this.finish.bind(this)
  }

  next(e) {
    const {nextSet} = this.props
    e.preventDefault()
    nextSet()
  }

  finish(e) {
    const {finish, currentWorkout, workout} = this.props
    const w = workout[currentWorkout.currentExercise]
    const finishedLastSet = currentWorkout.currentSet == w.sets.length

    e.preventDefault()
    if (finishedLastSet) {
      finish()
    } else if (window.confirm("Finish this exercise early?")) {
      finish()
    }
  }

  render() {

    const {user, currentWorkout, workout, adjustSet} = this.props
    const w = workout[currentWorkout.currentExercise]

    const finishedLastSet = currentWorkout.currentSet == w.sets.length

    return (
      <div className="sets-container" id="sets-container">
      
        <div className="sets-item">    
          <div className="set-item-row set-trainer-tips">
            <div className="set-trainer-title">
              <img className="set-trainer-avatar" src={avatarTrainer}/>
              Tips from {user.trainer}
            </div>
          
            <ul className="set-trainer-tips-ul">
              {w.tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          
          </div>
          <div 
            className={"set-item-row set-next " +
            (currentWorkout.currentSet!==null ? "u-hidden" : '')}
            onClick={this.next}
          >
            Start Now
            <img className="set-next-icon" src={iconArrowRight}/>
          </div>

        </div>

        {w.sets.map((set, i) => {
          return <Set key={i} i={i} set={set} sets={w.sets} activeSet={currentWorkout.currentSet} nextSet={this.next} adjustSet={adjustSet} />
        })}

        <div className="sets-item">
          <div className={"set-item-row set-finish " +
            (finishedLastSet ? '': 'set-unfinished')} 
            onClick={this.finish}>
            Finish
          </div>
        </div>


      </div> 
    )
  }
}
