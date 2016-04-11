import React from 'react'
const iconCheck = require('../static/images/icon-check@2x.png')
const iconCheckCircle = require('../static/images/icon-check-circle@2x.png')

export default class Set extends React.Component {

  renderInactive() {
    const {i, set, sets, activeSet} = this.props
    const numSets = sets.length
    const completed = set.completed || false

    return (
      <div className={
        "set set-collapsed " +
        (completed ? 'set-completed' : 'set-unfinished')
      }>
        <div className="set-number">
          Set {i+1} of {numSets}

        </div>
        <div className="set-reps">
          {set.reps}
          <span className="set-sublabel">reps</span>
        </div>
        <div className="set-weight">
          {set.weight}
          <span className="set-sublabel">lbs</span>
        </div>

        <div className="set-completed-marker">
          <img className="set-completed-icon" src={iconCheckCircle}/>
        </div>

      </div>

    )
  }

  renderActive() {
    const {i, set, sets, activeSet, nextSet, adjustSet} = this.props
    const numSets = sets.length

    return (
      <div className="set set-active" id="set-active">
        <div className="set-item-row set-number">
          <div className="set-number-inner">
            Set {i+1} of {numSets}
            {set.note ? <div className="set-number-note">{set.note}</div> : null}
          </div>
        </div>



        <div className="set-item-row set-item-row-gray set-reps">
          {set.reps}
          <span className="set-sublabel">reps</span>

          <a className="set-adjust-btn set-adjust-minus" 
            href='#' 
            onClick={e=>adjustSet('reps',-1)}>—</a>
          <a className="set-adjust-btn set-adjust-plus"
            href='#'
            onClick={e=>adjustSet('reps',+1)}>+</a>
        </div>
        <div className="set-item-row set-item-row-gray set-weight">
          {set.weight}
          <span className="set-sublabel">lbs</span>

          <a className="set-adjust-btn set-adjust-minus" 
            href='#' 
            onClick={e=>adjustSet('weight',-5)}>—</a>
          <a className="set-adjust-btn set-adjust-plus"
            href='#'
            onClick={e=>adjustSet('weight',+5)}>+</a>

        </div>
        <div className="set-item-row set-next-big" onClick={e=>nextSet(e)}>
          <img className="set-next-big-icon" src={iconCheck}/>
        </div>

      </div>
    )
  }

  render() {
    const {i, set, sets, activeSet} = this.props
    const numSets = sets.length

    return (
      <div className="sets-item">
        {i==activeSet ? this.renderActive() : this.renderInactive() }
      </div>
    )
  }
}
