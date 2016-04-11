import React from 'react'

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
    this.reset = this.reset.bind(this)

  }

  componentDidMount() {
    this.onClick()
  }
  
  componentWillUnmount() { // clear timer
    clearInterval(this.state.timer)
    this.setState({timer: undefined})
  }

  tick() {
    var elapsed = Date.now() - this.state.start + this.state.diff
    this.setState({elapsed: elapsed})
  }

  getTimeSpan(elapsed) { // 754567(ms) -> "12:34.567"
    var m = String(Math.floor(elapsed/1000/60)+100).substring(1);
    var s = String(Math.floor((elapsed%(1000*60))/1000)+100).substring(1);
    var ms = String(elapsed % 1000 + 1000).substring(1);
    return `${m}:${s}`
    // return m+":"+s+"."+ms;
  }

  onClick() {
    if(!this.state.isStart) { // start
      var timer = setInterval(this.tick, 33);
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
  
  reset() {
    clearInterval(this.state.timer);
    this.setState({
      timer: undefined,
      isStart: false,
      elapsed: 0,
      diff: 0
    })
  }

  render() {

    return (
      <span>
        {this.getTimeSpan(this.state.elapsed)}
        {/* <button onClick={this.onClick} style={style.button}>
          {this.state.isStart ? "pause" : "start"}
        </button>
        <button onClick={this.reset} style={style.button}>reset</button> */}
      </span>
    )
  }
}
