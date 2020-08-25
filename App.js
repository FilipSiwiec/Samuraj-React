class App extends React.Component {

  state = {
    text: ""
  }

  handle = () => {
    const numbers = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + numbers
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handle}>{this.props.btn}</button>
        <Result numerek={this.state.text}/>
      </div>
    )
  }
}

const Result = (props) => {
  return (
    <h1>{props.numerek}</h1>
  )
}

ReactDOM.render(<App btn="zmien cyferke" />, document.getElementById("root"))