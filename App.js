const Header = () => {
  return(
    <div>
      <h1>Witaj na stronie</h1>
    </div>
  )
}

// komponent klasowy

class Blog extends React.Component{
  // state={
  //   number: 0,
  // }
  render(){
    return(
      <section>
        <h2>Artykul</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, commodi? Consequatur, delectus assumenda. Quis, consequatur tenetur, alias quasi reprehenderit iure labore vero accusamus voluptates, placeat soluta impedit minima fuga natus?</p>
      </section>
    )
  }
}

const App = () => {
  return (
    <div>
    <Header/>
    <Blog/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));