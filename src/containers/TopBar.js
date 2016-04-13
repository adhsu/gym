import React from 'react'
import {connect} from 'react-redux'

import CircularProgress from '../components/CircularProgress'
import StopWatch from '../components/StopWatch'

import {toggleShowWorkout} from '../actions/session'

const avatarImg = require('../static/images/avatar@2x.png')
const iconHeartbeatImg = require('../static/images/icon-heartbeat@2x.png')


class TopBar extends React.Component {
  
  formatTimer(elapsed) {
    var m = String(Math.floor(elapsed/60)+100).substring(1)
    var s = String(Math.floor((elapsed%(60)))+100).substring(1)
    return `${m}:${s}`
  }

  render() {
    const {dispatch, user, session} = this.props

    return (
      <div className="top-bar">

        <div className="top-bar-secretreload" onClick={e=>location.reload()}></div>


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
          <span onClick={e=>dispatch(toggleShowWorkout())}>
            <StopWatch total={session.length}/>
          </span>
        </div>
      </div> 
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(TopBar);

