class App extends React.Component {

  state = {
    text: "",
    number: "jakis text"
  }

  handleClick = () => {
    const letter = "a";
    this.setState({
      text: this.state.text + letter
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Klinknij mnie</button>
        <h1>{this.state.text}</h1>
    <h2>{this.state.number}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));