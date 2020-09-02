const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male",
        },
        {
            id: 2,
            age: 49,
            name: "Marta",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female",
        },
        {
            id: 4,
            age: 24,
            name: "Karol",
            sex: "male",
        }
    ]
}

const Items = (props) => {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>Informacje o uzytkowniku</p>
            <p>twoj wiek to: {props.user.age}</p>
            <p>twoja plec to: {props.user.sex}</p>
        </div>
    )
}

class App extends React.Component {

    state = {
        select: "all"
    }

    userList = () => {
        let users = this.props.data.users
        switch (this.state.select) {
            case "all":
                return users.map(user => <Items user={user} />)
            case "female":
                users = users.filter(user => user.sex === "female");
                return users.map(user => <Items user={user} />)
            case "male":
                users = users.filter(user => user.sex === "male");
                return users.map(user => <Items user={user} />)
        }
    }

    handleChange = (option) => {
        this.setState({
            select: option
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleChange.bind(this, "all")}>Wszyscy</button>
                <button onClick={this.handleChange.bind(this, "female")}>Kobiety</button>
                <button onClick={this.handleChange.bind(this, "male")}>Mezczyzni</button>
                {this.userList()}
            </div>
        )
    }
}

ReactDOM.render(<App data={data} />, document.getElementById("root"))