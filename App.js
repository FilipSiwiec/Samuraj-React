const Positive = () => {
    return <p>Zapraszamy na film!</p>
}

const Negative = () => {
    return <p>Nie ukonczyles 18 lat</p>
}

class CheckAgeMovie extends React.Component {

    state = {
        checkBox: false,
    }

    checkMessage = () => {
        if (this.state.checkBox){
            return <Positive/>
        }

        else{
            return <Negative/>
        }
    }

    changeBul = () => {
        this.setState({
            checkBox: !this.state.checkBox
        })
    }

    render() {
        console.log(this.state.checkBox)
        return (
            <div>
                <h1>Horror roku w kinach!</h1>
                <input type="checkbox" onChange={this.changeBul} />
                <label htmlFor="age">Czy masz ukonczone 18 lat</label>
                {this.checkMessage()}
            </div>
        )
    }
}

ReactDOM.render(<CheckAgeMovie />, document.getElementById("root"));