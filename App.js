class App extends React.Component{

  state = {
    text: "",
  }

  handleOnclick = () => {
    const letter = "a";
    this.setState({
      text: this.state.text + letter,
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.handleOnclick}>dodajemy A</button>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))