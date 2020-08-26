class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      change: false,
    }
  }

  handleClick = () => {
    this.setState({
      change: !this.state.change,
    })
  }

  render() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae optio, numquam tenetur excepturi animi illo mollitia repudiandae alias, enim voluptatibus architecto et voluptas cumque dignissimos, soluta consequuntur neque sed."
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.change ? "ukryj" : "pokaz"}</button>
        {/* {this.state.change && <p>{text}</p>} */}
        {this.state.change ? <p>{text}</p> : null}
      </div>
    )
  }
}

ReactDOM.render(<Message />, document.getElementById("root"))