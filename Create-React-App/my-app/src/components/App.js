import React, { Component } from 'react';
import ButtonFetchUsers from "./ButtonFetchUsers";
import UserList from "./UserList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {

  state = {
    users: null
  }

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          // console.log(response)
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          users: data.results
        })
      })
      .catch(error => console.log(error + " coś nie dziala"))
  }

  render() {
    const users = this.state.users
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        { users ? <UserList users={users} /> : users}
      </div >
    );
  }
}

export default App;