import React from 'react'
import update from 'react-addons-update'

import TopBar from './TopBar'
import ExerciseContainer from './ExerciseContainer'
import SetsContainer from './SetsContainer'
import Waiting from './Waiting'
import Finished from './Finished'
import WorkoutSummary from './WorkoutSummary'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
        showWorkoutSummary: false,
        waiting: true,
        finished: false,
        currentExercise: 0,
        currentSet: 0 // null if you haven't started yet
      },

      // workout is an array of exercise objects
      workout: [
        {
          id: 0,
          machine: "Pullup and Dip Station 1",
          name: "Wide-Grip Pullup",
          description: "4 sets, 10 reps to failure",
          tips: [
            "Hands spaced wider than shoulder width",
            "Curve lower back, stick chest out",
            "Pull until bar touches your upper chest",
            "Focus on squeezing back muscles at the top"],
          sets: [
            {reps: 10, weight: 90, completed: false},
            {reps: 10, weight: 90, completed: false},
            {reps: 10, weight: 90, completed: false},
            {reps: 10, weight: 90, completed: false},
          ],
          completed: false
        },
        {
          id: 1,
          machine: "Bumper Station 1",
          name: "Bent-Over Long Bar Row",
          description: "3 sets, 10-12 reps",
          tips: [
            "Bend torso close to parallel with floor, bend knees slightly",
            "Keep your elbows in and squeeze your back",
            "Lower slowly all the way down and stretch the lats"],
          sets: [
            {reps: 10, weight: 45, completed: false},
            {reps: 10, weight: 90, completed: false},
            {reps: 10, weight: 90, completed: false},
          ],
          completed: false
        },
        {
          id: 2,
          machine: "Pulldown Station 1",
          name: "Close Grip Pulldown",
          description: "3 sets, 10-12 reps",
          tips: [
            "Close grip - hands closer than shulder width",
            "Curve lower back and stick your chest out",
            "Pull to your upper chest and squeeze your back"
          ],
          sets: [
            {reps: 10, weight: 95, completed: false},
            {reps: 10, weight: 95, completed: false},
            {reps: 10, weight: 95, completed: false}
          ],
          completed: false
        },
        {
          id: 3,
          machine: "Free Weight Station 5",
          name: "Dumbbell Single Arm Row",
          description: "3 sets 10 reps",
          tips: [
            "Upper body parallel to floor",
            "Keep your upper arm close to your side and torso stationary",
            "Squeeze your back muscles - your arms should do no work."],
          sets: [
            {reps: 10, weight: 50, completed: false},
            {reps: 10, weight: 50, completed: false},
            {reps: 10, weight: 50, completed: false}
          ],
          completed: false
        },
        {
          id: 4,
          machine: "Cable Machine 1",
          name: "Straight-Arm Rope Pulldown",
          description: "5 sets 15 reps",
          tips: [
            "Keep your back straight",
            "Keep your arms straight",
            "Squeeze with your lats"],
          sets: [
            {reps: 15, weight: 95, completed: false},
            {reps: 15, weight: 95, completed: false},
            {reps: 15, weight: 95, completed: false},
            {reps: 15, weight: 95, completed: false},
            {reps: 15, weight: 95, completed: false}
          ],
          completed: false
        },
        {
          id: 5,
          machine: "Free Weight Station 5",
          name: "EZ-Bar Curl",
          description: "First 2 sets strict, second 2 sets cheat",
          tips: [
            "Keep your upper arms stationary",
            "Squeeze your contracted biceps at the top"
          ],
          sets: [
            {reps: 12, weight: 50, completed: false},
            {reps: 10, weight: 60, completed: false},
            {reps: 6, weight: 70, completed: false},
            {reps: 4, weight: 80, completed: false}
          ],
          completed: false
        },
        {
          id: 6,
          machine: "Free Weight Station 5",
          name: "Incline Dumbbell Curl",
          description: "1 minute long sets",
          tips: [
            "Palms facing forward",
            "Keep the upper arms stationary",
            "Only move your forearms"
          ],
          sets: [
            {reps: 10, weight: 30, completed: false},
            {reps: 10, weight: 30, completed: false},
            {reps: 10, weight: 30, completed: false},
            {reps: 10, weight: 30, completed: false}
          ],
          completed: false
        },
        {
          id: 7,
          machine: "Preacher Curl Machine",
          name: "Spider Curl",
          description: "2 sets to failure! Try for at least 10",
          tips: [
            "Stretch your bicep at the bottom",
            "Squeeze at the top for a second before lowering!"],
          sets: [
            {reps: 10, weight: 30, completed: false, note: "To failure!"},
            {reps: 10, weight: 30, completed: false, note: "To failure!"}
          ],
          completed: false
        },
        {
          id: 8,
          machine: "Free Weight Station 5",
          name: "Dumbbell Hammer Curl",
          description: "2 sets to failure! Try for at least 10",
          tips: [
            "Palms should be facing your torso",
            "Hold the contracted position for a second and squeeze your biceps"],
          sets: [
            {reps: 10, weight: 30, completed: false, note: "To failure!"},
            {reps: 10, weight: 30, completed: false, note: "To failure!"}
          ],
          completed: false
        }
      ]
    }

    this.toggleWorkoutSummary = this.toggleWorkoutSummary.bind(this)
    this.finish = this.finish.bind(this)
    this.identify = this.identify.bind(this)
    this.nextSet = this.nextSet.bind(this)
    this.nextExercise = this.nextExercise.bind(this)
    this.goToExercise = this.goToExercise.bind(this)
    this.adjustSet = this.adjustSet.bind(this)
  }

  toggleWorkoutSummary() {
    this.setState({currentWorkout: {...this.state.currentWorkout, showWorkoutSummary: !this.state.currentWorkout.showWorkoutSummary}})
    
  }

  goToExercise(id) {
    // Jump to specific exercise id

  }

  adjustSet(type, number) {
    console.log('adjusting ', type, number)

    const newState = update(this.state, {
      workout: {[this.state.currentWorkout.currentExercise]: {
        sets: {[this.state.currentWorkout.currentSet]: {
          [type]: {$apply: x=>x+parseInt(number)}
        }}
      }}
    })

    this.setState(newState)


  }

  finish() {
    // Finishing an exercise.
    
    const newState = update(this.state, {
      currentWorkout: {
        finished: {$set: true}
      }
    })

    this.setState(newState)
  }

  nextExercise() {
    // advancing to the next exercise

    const newState = update(this.state, {
      currentWorkout: {
        showWorkoutSummary: {$set: false},
        waiting: {$set: true},
        finished: {$set: false},
        currentExercise: {$apply: x=>x+1},
        currentSet: {$set: null}
      },
      workout: {
        [this.state.currentWorkout.currentExercise]: {
          completed: {$set: true}
        }
      }
    })

    this.setState(newState)

  }

  identify() {
    // "I am Andrew."
    this.setState({currentWorkout: {...this.state.currentWorkout, waiting: false}})
  }

  nextSet() {
    const e = this.state.currentWorkout.currentExercise

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


      setTimeout(()=> {

        if (this.state.currentWorkout.currentSet <= this.state.workout[this.state.currentWorkout.currentExercise].sets.length-1) {
          
          var active = document.getElementById('set-active')
          var container = document.getElementById('sets-container')
          var activeRect = active.getBoundingClientRect()
          var containerRect = container.getBoundingClientRect()

          var delta = activeRect.bottom - containerRect.bottom
          console.log('delta is ', delta)

          if (delta > 0) {
            // container.scrollTop += delta
            $(container).animate({scrollTop: container.scrollTop+delta})
          }

        }
        
      }, 10)
      

    }
    
  }

  renderFinished() {
    return (
      <Finished {...this.state} nextExercise={this.nextExercise} />
    )
  }

  renderMain() {
    return (
      <div className="main-container">
        <ExerciseContainer {...this.state} />
        <SetsContainer {...this.state} nextSet={this.nextSet} finish={this.finish} adjustSet={this.adjustSet} />
      </div>
    )
  }

  render() {
    if (this.state.currentWorkout.waiting) {
      return <Waiting {...this.state} identify={this.identify} />
    }

    return (
      <div>
        <div className={"screen " + 
          (this.state.currentWorkout.showWorkoutSummary ? "screen-zoom-out" : '')}>
          
          <TopBar {...this.state} toggle={this.toggleWorkoutSummary} />

          {this.state.currentWorkout.finished ? this.renderFinished() : this.renderMain()}
        </div>


        <ReactCSSTransitionGroup transitionName="summary-transition" transitionEnterTimeout={350} transitionLeaveTimeout={200}>
          { this.state.currentWorkout.showWorkoutSummary ? <WorkoutSummary toggle={this.toggleWorkoutSummary} {...this.state}/> : null}
        </ReactCSSTransitionGroup>
        
      </div> 
    )
  }
}
