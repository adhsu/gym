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
        <div className="set-number">Set {i+1} of {numSets}</div>
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
    const {i, set, sets, activeSet, nextSet} = this.props
    const numSets = sets.length

    return (
      <div className="set set-active">
        <div className="set-item-row set-number">Set {i+1} of {numSets}</div>
        <div className="set-item-row set-item-row-gray set-reps">
          {set.reps}
        </div>
        <div className="set-item-row set-item-row-gray set-weight">
          {set.weight}
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
