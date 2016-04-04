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
    const {finish} = this.props
    e.preventDefault()
    finish()
  }

  render() {

    const {user, currentWorkout, workout} = this.props
    const w = workout[currentWorkout.currentExercise]
    return (
      <div className="sets-container">
      
        <div className="sets-item">    
          <div className="set-item-row set-trainer-tips">
            <div className="set-trainer-title">
              <img className="set-trainer-avatar" src={avatarTrainer}/>
              Tips from {user.trainer}
            </div>
            <p>{w.tips}</p>
          </div>
          <div 
            className={"set-item-row set-next " +
            (currentWorkout.currentSet!==null ? "u-hidden" : null)}
            onClick={this.next}
          >
            Start Now
            <img className="set-next-icon" src={iconArrowRight}/>
          </div>

        </div>

        {w.sets.map((set, i) => {
          return <Set key={i} i={i} set={set} sets={w.sets} activeSet={currentWorkout.currentSet} nextSet={this.next} />
        })}

        <div className="sets-item">
          <div className="set-item-row set-finish" onClick={this.finish}>Finish</div>
        </div>


      </div> 
    )
  }
}
