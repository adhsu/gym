import React from 'react'
const woman = require('../static/images/woman.png')

export default class ExerciseContainer extends React.Component {
  render() {
    return (
      <div className="exercise-container">
        <div className="exercise-name h1">Dumbbell Chest Press</div>
        <div className="exercise-description">3 power sets and 1 rep set</div>
        <img className="exercise-image" src={woman}/>
      </div> 
    )
  }l
}
