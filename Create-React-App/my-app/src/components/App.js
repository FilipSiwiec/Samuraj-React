import React, { Component } from 'react';
import Words from "./Words"

class App extends Component {

  state = {
    words: [],
    isLoaded: false
  }

  componentDidMount() {
    setInterval(this.fetchData, 3000)
    // fetch("data/words.json")
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       words: data.words,
    //       isLoaded: true
    //     })
    //   })
  }

  fetchData = () => {
    fetch("data/words.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          words: data.words,
          isLoaded: true
        })
      })
  }



  render() {
    const words = this.state.words.map(word => (
      <Words key={word.id}
        english={word.en}
        polish={word.pl} />
    ))
    return (
      <div>
        {this.state.isLoaded ? words : "wczytujemy dane"}
      </div>
    );
  }
}

export default App;