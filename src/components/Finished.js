import React from 'react'
const map = require('../static/images/map.png')

export default class Finished extends React.Component {
  
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
    
    return (
      <div className="finished-container">
        <div className="finished-title h1">Nice! Almost done.</div>
        <div className="finished-quote">"You want me to do something... tell me I can't do it." —Maya Angelou</div>
        <img className="finished-map" src={map}/>

        <div className="finished-next-wrapper">
          <span className="finished-next-label">Next Station</span>
          <span className="finished-next-title h1">Squat Rack #4</span>
        </div>

      </div>

    )
  }
}
