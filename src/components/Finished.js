import React from 'react'
const map = require('../static/images/map.png')

export default class Finished extends React.Component {
  
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      quotes: [
        `"You want me to do something... tell me I can't do it." —Maya Angelou`,
        `"Take care of your body. It's the only place you have to live." —Jim Rohn`,
        `"Health is the thing that makes you feel that now is the best time of the year." -Franklin Pierce Adams`,
        `"The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion." - Arnold`,
        `"If something stands between you and your success, move it. Never be denied." - Dwayne Johnson`,
        `"Success is usually the culmination of controlling failure." - Sylvester Stallone`
      ]
    }
  }

  handleClick(e) {
    const {nextExercise} = this.props
    e.preventDefault()
    nextExercise()
  }

  render() {
    const {currentWorkout, workout} = this.props
    return (
      <div className="finished-container">
        <div className="finished-title h1">Nice job.</div>
        <div className="finished-quote">{this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)]}</div>
        <img className="finished-map" src={map}/>

        <div className="finished-next-wrapper">
          <span className="finished-next-label">Next Station</span>
          <span className="finished-next-title h1">{workout[currentWorkout.currentExercise+1].machine}</span>
        </div>

        <div className="finished-secretnext" onClick={this.handleClick}></div>

      </div>

    )
  }
}
