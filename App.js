class App extends React.Component {
  state = {
    active: true
  }

  handleClick = () => {
    this.setState(state => ({
      active: !state.active
    }))
  }

  render() {
    return (
      <div>
        <Switch
          click={this.handleClick}
          active={this.state.active}
        />
        {this.state.active && <Clock />}
      </div>
    )
  }
}

const Switch = (props) => {
  return (
    <button onClick={props.click}>{props.active ? "wylacz" : "wlacz"}</button>
  )
}

class Clock extends React.Component {
  state = {
    time: this.getTime()
  }

  getTime() {
    const time = new Date()
    return ({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    })
  }

  setTime = () => {
    const time = this.getTime()
    this.setState({
      time
    })
  }

  componentDidMount() {
    this.interal = setInterval(this.setTime, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interal)
  }

  render() {
    const { hours, minutes, seconds } = this.state.time
    return (
      <div>
        {hours} : {minutes > 9 ? minutes : `0${minutes}`} : {seconds}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"))