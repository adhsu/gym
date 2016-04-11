import React from 'react'
const waitingImage = require('../static/images/andrew.png')

export default class Waiting extends React.Component {
  
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(e) {
    const {identify} = this.props
    e.preventDefault()
    identify()
  }

  render() {
    const {user, currentWorkout, workout} = this.props
    const w = workout[currentWorkout.currentExercise]

    return (
      <div className="waiting-container">
        
        <div className="waiting-image-container">
          <div className="waiting-image-wrapper">
            <img className="waiting-image"
              src={waitingImage}/>
          </div>
          
          <div className="waiting-image-ring"></div>
        </div>
        

        <div className="waiting-text">
          <b>{w.machine}</b> is currently waiting for <b>{user.name}</b>.
        </div>
        <a className="waiting-accept-button" href='#' onClick={this.handleClick}>
          I am {user.name}.
        </a>

      </div>

    )
  }
}
