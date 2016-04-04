import React from 'react'
import CircularProgress from './CircularProgress'

const avatarImg = require('../static/images/avatar@2x.png')
const iconHeartbeatImg = require('../static/images/icon-heartbeat@2x.png')

export default class TopBar extends React.Component {
  render() {
    
    const {user} = this.props

    return (
      <div className="top-bar">

        <div className="top-bar-section top-bar-left">      
          <div className="user-wrapper">
            <img className="user-avatar" src={avatarImg} />
            
            <div className="user-info">
              <div className="user-name">{user.name}</div>
              <div className="user-heartbeat">
                <img className="user-heartbeat-icon" src={iconHeartbeatImg} />
                <span className="user-heartbeat-bpm">{user.bpm} BPM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="top-bar-section top-bar-right">
          
          <div className="workout-info">
            <div className="workout-name">Today's workout</div>
            <div className="workout-timer">43:25</div>
          </div>

          <div className="workout-progress">
            <CircularProgress
              strokeWidth="6"
              radius="28"
              percentage="75" />
          </div>


        </div>



      </div> 
    )
  }
}
