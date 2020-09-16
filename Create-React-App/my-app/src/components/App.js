import React, { Component } from 'react';

const data = [
  { id: 1, title: "Wiadomosc nr 1", body: "Zawartosc wiadomosci nr 1..." },
  { id: 2, title: "Wiadomosc nr 2", body: "Zawartosc wiadomosci nr 2..." },
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomosc nr ${index}`,
    body: `Zawartosc wiadomosci nr ${index}...`
  })
  console.log(data)
}, 1000)

class App extends Component {

  state = {
    comments: [...data]
  }

  getData = () => {
    this.setState({
      comments: [...data]
    })
  }

  componentDidMount(){
    this.idI =  setInterval(this.getData, 5000)
  }

  componentWillUnmount(){
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>

    ));
    return (
      <div>
        {comments.reverse()}
      </div>
    );
  }
}

export default App;