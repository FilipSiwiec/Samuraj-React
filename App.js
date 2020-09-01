class App extends React.Component {
    state = {
        items: ["gruszka", "jabłko", "pomidory"],
    }

    render() {
        return (
            <ul>
                {this.state.items.map((item) => { return <li key={item}>{`owocem jest ${item}`}</li> })}
            </ul>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));