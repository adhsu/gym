import React from 'react'
import update from 'react-addons-update'

import TopBar from './TopBar'
import ExerciseContainer from './ExerciseContainer'
import SetsContainer from './SetsContainer'
import Waiting from './Waiting'
import Finished from './Finished'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      user: {
        name: "Andrew",
        bpm: 82,
        trainer: "Kelly"
      },

      currentWorkout: {
        waiting: true,
        finished: false,
        currentExercise: 0,
        currentSet: null // null if you haven't started yet
      },

      // workout is an array of exercise objects
      workout: [
        {
          machine: "Free Weight Station 2",
          name: "Dumbbell Chest Press",
          description: "3 power sets and 1 rep set.",
          tips: "Focus on power throughout! Drive with your feet and make sure to keep the bar above your sternum like we talked about. Also, make your pecs really work by having a grip that is at least shoulder width apart!",
          sets: [
            {reps: 5, weight: 95, completed: false},
            {reps: 8, weight: 135, completed: false},
            {reps: 6, weight: 165, completed: false},
            {reps: 8, weight: 195, completed: false},
            {reps: 12, weight: 135, completed: false}
          ]
        },
        {
          machine: "Free Weight Station 3",
          name: "Tricep Kickbacks",
          description: "5 sets",
          tips: "Keep your back parallel to the ground, elbow against your body, hinge from the elbow. Everything should stay tight.",
          sets: [
            {reps: 8, weight: 25, completed: false},
            {reps: 8, weight: 25, completed: false},
            {reps: 8, weight: 25, completed: false}
          ]
        }
      ]
    }

    this.finish = this.finish.bind(this)
    this.identify = this.identify.bind(this)
    this.nextSet = this.nextSet.bind(this)
  }

  finish() {
    this.setState({currentWorkout: {...this.state.currentWorkout, finished: true}})

  }
  identify() {
    this.setState({currentWorkout: {...this.state.currentWorkout, waiting: false}})
  }

  nextSet() {
    const e = this.state.currentWorkout.currentExercise
    console.log('next set', e)

    if (this.state.currentWorkout.currentSet==null) {
      const newState = update(this.state, {
        currentWorkout: {
          currentSet: {$set: 0}
        }
      })
      this.setState(newState)
    } else {
      const newState = update(this.state, {
        currentWorkout: {
          currentSet: {$apply: x => x+1}
        },
        workout: {[this.state.currentWorkout.currentExercise]: {
          sets: {[this.state.currentWorkout.currentSet]: {
            completed: {$set: true}
          }}
        }}
      })
      this.setState(newState)
    }
    
  }

  renderFinished() {
    return (
      <div>
        <Finished/>
      </div>
    )
  }

  renderMain() {
    return (
      <div>
        <ExerciseContainer/>
        <SetsContainer {...this.state} nextSet={this.nextSet} finish={this.finish} />
      </div>
    )
  }

  render() {
    if (this.state.currentWorkout.waiting) {
      return <Waiting {...this.state} identify={this.identify} />
    }

    return (
      <div>
        <TopBar {...this.state} />
        {this.state.currentWorkout.finished ? this.renderFinished() : this.renderMain()}

      </div> 
    )
  }
}
