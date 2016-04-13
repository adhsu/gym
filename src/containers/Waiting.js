import React from 'react'
import {connect} from 'react-redux'
import {confirmIdentity} from '../actions/session'

const waitingImage = require('../static/images/andrew.jpg')

class Waiting extends React.Component {
  
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const {dispatch} = this.props
    e.preventDefault()
    dispatch(confirmIdentity())
  }

  render() {
    const {dispatch, user, session} = this.props
    const exercise = session.routine[session.exercise]

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
          <b>{exercise.machine}</b> is currently waiting for <b>{user.name}</b>.
        </div>
        <a className="waiting-accept-button" href='#' onClick={this.handleClick}>
          I am {user.name}.
        </a>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Waiting);

