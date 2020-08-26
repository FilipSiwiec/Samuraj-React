class App extends React.Component {

  state = {
    value: ""
  }

  change = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handle = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.change} placeholder="wpisz text..." type="text" />
        <button onClick={this.handle} >Reset</button>
        <h1>{this.state.value.toUpperCase()}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));