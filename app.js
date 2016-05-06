// TODO
/*
TO CREATE react Componenet:
var App = () => (  --USE CAP name
  <div>Some cliche salutation</div>   ---THIS IS returning JSX (represent the intended HTML)
);


TO RENDER react Component: 
ReactDom.render(compInstance (<App/>), DOMElement)

ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"))
*/

var App = () => (
  <div>
    <h2>Groceries</h2>
    <GroceryList groceries={list} />
  </div>
  )

var GroceryList = (props) => (
  <ul>
   {props.groceries.map(item =>
    <GroceryListItem item={item} />
    )}
  </ul>
  );


class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      done: false
    };
  } 

  onListItemClick () {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseLeave={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}


var list = ['Cheese', 'Chips']



ReactDOM.render(<App />, document.getElementById('app'));