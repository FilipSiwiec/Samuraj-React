class Counter extends React.Component {

    state = {
        count: 0,
        result: this.props.result
    }

    handleClick = (type, number) => {
        if (type === "substraction") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        }
        else if (type === "reset") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: 0
            }))
        }
        else if (type === "addition") {
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        }
    }

    render() {
        return (
            <div>
                <Guziczek
                    type="substraction"
                    number="10"
                    name="-10"
                    click={this.handleClick}
                />
                <Guziczek
                    type="substraction"
                    number="1"
                    name="-1"
                    click={this.handleClick}
                />
                <Guziczek
                    type="reset"
                    name="reset"
                    click={this.handleClick}
                />
                <Guziczek
                    type="addition"
                    number="1"
                    name="+1"
                    click={this.handleClick}
                />
                <Guziczek
                    type="addition"
                    number="10"
                    name="+10"
                    click={this.handleClick}
                />
                <Result
                    count={this.state.count}
                    result={this.state.result}
                />
            </div>
        )
    }
}

const Guziczek = (props) => {
    const number = parseInt(props.number)
    return (
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const Result = (props) => {
    return (
        <div>
            <h1>Ilosc kloikniec: {props.count} {props.count > 11 ? <span>  Przeiazenie procesora</span> : null}</h1>
            <h1>Twoj wynik to: {props.result}</h1>
        </div>
    )
}

ReactDOM.render(<Counter result="37" />, document.getElementById("root"))