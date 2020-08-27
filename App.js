class Counter extends React.Component {

    state = {
        count: 0,
        result: this.props.value
    }

    handleClick = (type, number) => {
        if (type === "substraction") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        }
        else if(type === "reset"){
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0
            }))
        }
        else if(type === "addition"){
            this.setState(prevState => ({
                count: prevState.count +1,
                result: prevState.result + number
            }))
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, "substraction", 10)}>-10</button>
                <button onClick={() => this.handleClick("substraction", 1)}>-1</button>
                <button onClick={this.handleClick.bind(this, "reset")}>reset</button>
                <button onClick={this.handleClick.bind(this, "addition", 1)}>+1</button>
                <button onClick={this.handleClick.bind(this, "addition", 10)}>+10</button>
                <h1>Ilośc klikniec to: {this.state.count}</h1>
                <h1>Twoj wynik to: {this.state.result}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Counter value="34"/>, document.getElementById("root"))