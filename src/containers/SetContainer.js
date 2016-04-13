import React from 'react'
import {connect} from 'react-redux'
import {finishSet, adjustSet, goToSet} from '../actions/session'

const iconCheck = require('../static/images/icon-check@2x.png')
const iconCheckCircle = require('../static/images/icon-check-circle@2x.png')
const iconArrowRight = require('../static/images/icon-arrow-right@2x.png')
const avatarTrainer = require('../static/images/avatar-kelly@2x.png')


class SetContainer extends React.Component {

  constructor(props) {
    super(props)

    const {set} = this.props

    // initial setting of rest value
    if (set.rest !== undefined) {
      this.state = {
        remainingRest: set.rest
      }
    }

    this.tick = this.tick.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  tick() {
    const {dispatch, index, session} = this.props

    if (this.state.remainingRest>0) {
      this.setState({
        remainingRest: this.state.remainingRest-1
      })
    } else {
      console.log('calling tick>nextSet on set', index)
      dispatch(finishSet(session.exercise, session.set))
    }
  }

  componentWillReceiveProps(nextProps) {
    const {dispatch, index, active, set, session} = this.props
    
    if (active && nextProps.session.resting) {
      // if set is active and we're currently resting, start the timer
      console.log('start rest timer for set', index)
      this.interval = setInterval(this.tick, 1000)
    } else {
      // otherwise clear it if we've moved on
      if (this.interval) { 
        console.log('clearing rest timer for set', index)
        clearInterval(this.interval)
      }
      
    }
  }

  componentWillUnmount() {
    // clear timer check
    clearInterval(this.interval)
  }

  handleClick(e, id) {
    const {dispatch, session} = this.props
    e.preventDefault()
    dispatch(goToSet(session.exercise, id))
  }

  renderInactive() {
    const {dispatch, index, active, set, session, numSets} = this.props
    const completed = (set.completed || false)

    return (
      <div className={"set set-collapsed " +
        (completed ? 'set-completed' : 'set-unfinished')}
        onClick={e=>this.handleClick(e, index)}>

        <div className="set-number">
          Set {index+1} of {numSets}

        </div>
        <div className="set-reps">
          {set.reps}
          <span className="set-sublabel">reps</span>
        </div>
        <div className={"set-weight "}>
          {set.weight}
          <span className="set-sublabel">lbs</span>
        </div>

        <div className="set-completed-marker">
          <img className="set-completed-icon" src={iconCheck}/>
        </div>

      </div>

    )
  }

  renderActive() {
    const {dispatch, index, active, set, session, numSets} = this.props
    

    // if resting after a set, the set is still Active, just in resting phase
    if (session.resting) {
      const restRemaining = this.state.remainingRest/set.rest*100
      return (
        <div>
          {this.renderInactive()}
          <div className="set set-rest"
            onClick={e=>dispatch(finishSet(session.exercise, session.set))}>
            <div className="set-rest-inner"
              style={{'width':`${restRemaining}%`}}></div>

            <div className="set-rest-content">
              <span>resting for </span>
              <span className="set-rest-num">{this.state.remainingRest}</span>
              <span> seconds</span>
            </div>
            
          </div>
        </div>
      )
    }

    return (
      <div className="set set-active" id="set-active">
        <div className="set-item-row set-number">
          <div className="set-number-inner">
            Set {index+1} of {numSets}
            {set.note ? <div className="set-number-note">{set.note}</div> : null}
          </div>
        </div>

        <div className="set-item-row set-item-row-gray set-reps">
          {set.reps}
          <span className="set-sublabel">reps</span>

          <a className="set-adjust-btn set-adjust-minus" 
            href='#' 
            onClick={e=>dispatch(adjustSet(session.exercise, session.set, 'reps',-1))}>—</a>
          <a className="set-adjust-btn set-adjust-plus"
            href='#'
            onClick={e=>dispatch(adjustSet(session.exercise, session.set, 'reps',+1))}>+</a>
        </div>

        <div className={"set-item-row set-item-row-gray set-weight " +
          (set.bodyweight ? 'u-hidden' : '')}>
          {set.weight}
          <span className="set-sublabel">lbs</span>

          <a className="set-adjust-btn set-adjust-minus" 
            href='#' 
            onClick={e=>dispatch(adjustSet(session.exercise, session.set, 'weight',-5))}>—</a>
          <a className="set-adjust-btn set-adjust-plus"
            href='#'
            onClick={e=>dispatch(adjustSet(session.exercise, session.set, 'weight',+5))}>+</a>

        </div>
        <div className="set-next-big" 
          onClick={e=>dispatch(finishSet(session.exercise, session.set))}>
          Finish Set
          <img className="set-start-first-icon" src={iconArrowRight}/>
        </div>

      </div>
    )
  }

  render() {
    const {dispatch, index, active, set, session, numSets} = this.props
    
    return (
      <div className="sets-item">
        {active ? this.renderActive() : this.renderInactive() }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

  
  return {
    active: (state.session.set == ownProps.index),
    set: state.session.routine[state.session.exercise].sets[ownProps.index],
    session: state.session,
    numSets: state.session.routine[state.session.exercise].sets.length
  }
}

export default connect(mapStateToProps)(SetContainer);

