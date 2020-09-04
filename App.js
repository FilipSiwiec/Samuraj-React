class App extends React.Component {
    state = { 
        city: "London",
        text: "",
        check: false,
        select: 2
     }

     cityChange = (e) => {
         this.setState({
             city: e.target.value
         })
     }

     textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    boxChange = (e) => {
        this.setState({
            check: e.target.checked
        })
    }

    selectChange = (e) => {
        this.setState({
            select: e.target.value
        })
    }

    render() { 
        return ( 
        <form>
            <label>
                Podaj miasto:
                <input value={this.state.city} onChange={this.cityChange} type="text"/>
            </label>
            <br/>
            <label>
                Napisz cos o tym miescie:
                <textarea value={this.state.text} onChange={this.textChange}></textarea>
            </label>
            <br/>
            <label>
                Czy lubisz to miasto?
                <input type="checkbox" onChange={this.boxChange} checked={this.state.check}/>
            </label>
            <br/>
            <label>
                Ile razy byles w tym miescie?
                <select value={this.state.select} onChange={this.selectChange}> 
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="many">wiele</option>
                </select>
            </label>
        </form>
         );
    }
}
 
ReactDOM.render(<App/>, document.getElementById("root"))