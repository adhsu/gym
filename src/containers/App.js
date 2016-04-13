import React from 'react'
import {connect} from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import update from 'react-addons-update'

import TopBar from './TopBar'
import ExerciseContainer from './ExerciseContainer'
import SetsContainer from './SetsContainer'
import Waiting from './Waiting'
import Finished from './Finished'
import WorkoutSummary from './WorkoutSummary'

class App extends React.Component {

  renderFinished() {
    return (
      <Finished />
    )
  }

  renderMain() {
    return (
      <div className="main-container">
        <ExerciseContainer />
        <SetsContainer />
      </div>
    )
  }

  render() {
    const {session} = this.props
    
    if (session.waiting) {
      return <Waiting />
    }

    return (
      <div>
        <div className={"screen " + 
          (session.showWorkoutSummary ? "screen-zoom-out" : '')}>
          <TopBar/>
          {session.finished ? this.renderFinished() : this.renderMain()}
        </div>

        <ReactCSSTransitionGroup transitionName="summary-transition" transitionEnterTimeout={350} transitionLeaveTimeout={200}>
          {session.showWorkoutSummary ? <WorkoutSummary/> : null}
        </ReactCSSTransitionGroup>
        
      </div> 
    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);

