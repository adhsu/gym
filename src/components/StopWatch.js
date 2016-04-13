import React from 'react'
import CircularProgress from './CircularProgress'

export default class StopWatch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isStart: false,
      elapsed: 0,
      diff: 0
    }

    this.tick = this.tick.bind(this)
    this.onClick= this.onClick.bind(this)

  }

  componentDidMount() {
    this.onClick()
  }
  
  componentWillUnmount() { // clear timer
    clearInterval(this.state.timer)
    this.setState({timer: undefined})
  }

  tick() {
    this.setState({elapsed: this.state.elapsed+1})
  }

  getTimeSpan(elapsed) { // 754567(ms) -> "12:34.567"
    var m = String(Math.floor(elapsed/60)+100).substring(1);
    var s = String(Math.floor((elapsed%(60)))+100).substring(1);
    return `${m}:${s}`
    // return m+":"+s+"."+ms;
  }

  onClick() {
    if(!this.state.isStart) { // start
      var timer = setInterval(this.tick, 1000);
      this.setState({
        isStart: true,
        timer: timer,
        start: new Date(),
      });
    } else { // pause
      clearInterval(this.state.timer);
      this.setState({
        timer: undefined,
        isStart: false,
        diff: this.state.elapsed,
      });
    }
  }
  
  

  render() {
    const {total} = this.props

    const percentage = Math.floor(100*this.state.elapsed/(total*60))

    return (
      <div>
        <div className="workout-info">
          <div className="workout-name">
            Today's workout
          </div>
          <div className="workout-timer">
            {this.getTimeSpan(this.state.elapsed)}
          </div>
        </div>

        <div className="workout-progress">
          <CircularProgress
            strokeWidth="6"
            radius="28"
            percentage={percentage} />  
        </div>
        
      </div>
    )
  }
}
