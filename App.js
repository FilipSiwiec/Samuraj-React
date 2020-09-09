// const Dollars = (props) => {
//     return (
//         <div>Wartosc w dolarach: {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2) }</div>
//     )
// }

// const Euros = (props) => {
//     const value = (props.cash / props.ratio).toFixed(2)
//     return (
//         <div>Wartosc w euro: {props.cash <= 0 ? "" : value}</div>
//     )
// }

const Cash = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
    return (
        <div>{props.title} {props.cash <= 0 ? "" : value}</div>
    )
}

class App extends React.Component {
    state = {
        amount: "",
        ratioDollar: 3.6,
        ratioEuro: 4.6
    }

    handleChange = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    render() {
        const { amount, ratioDollar, ratioEuro } = this.state;
        return (
            <div>
                <label>
                    <input
                        type="number"
                        value={amount}
                        onChange={this.handleChange}
                    />
                </label>
                <Cash
                    cash={amount}
                    ratio={ratioDollar}
                    title="Wartosc w Euro:"
                />
                <Cash
                    cash={amount}
                    ratio={ratioEuro}
                    title="Wartosc w dolarach:"
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))