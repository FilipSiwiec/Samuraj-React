class ShoppingList extends React.Component {

  state = {
    item1: "ogorki",
    item2: "pietruszka",
    item3: "mleko"
  }

  render() {
    return (
      <div>
        <h1>To jest moja lista zakupow</h1>
        <ul>
          <ItemList name={this.state.item1} example="2+2" />
          <ItemList name={this.state.item2} />
          <ItemList name={this.state.item3} />
        </ul>
      </div>
    )
  }

}


class ItemList extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}, {this.props.example}
      </div>
    )
  }
}

// const ItemList = (props) => {
//   return (
//     <div>
//       {props.name}, {props.example}
//     </div>
//   )
// }

ReactDOM.render(<ShoppingList />, document.getElementById("root"));