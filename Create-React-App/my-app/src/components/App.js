import React, { Component } from 'react';
import "./App.css"
import SwitchButton from "./SwitchButton"

class App extends Component {
  state = {
    time: 0,
    active: false
  }

  addnumbers = () => {
    this.setState({
      time: this.state.time + 1
    })
  }

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.number)
    }
    else {
      this.number = setInterval(() => this.addnumbers(), 1000)
    }
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        {this.state.time}
        <br />
        <SwitchButton
          click={this.handleClick}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default App
