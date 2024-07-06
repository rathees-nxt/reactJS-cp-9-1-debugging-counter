// fix: the component class should be defined like this
import {Component} from 'react'

import './index.css'
// fix: to defined class component need to use react 'component' class
class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    // fix: the state should be updated usig 'setState' method
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    // fix: the state should be updated usig 'setState' method
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    // fix: use const to avoid reassigning a value  to the variable
    const {count} = this.state

    return (
      // fix: the event handler should be used as a reference to the onClick
      <div className="app-container">
        <h1 className="count">Count {count}</h1>

        <button className="button" onClick={this.onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={this.onDecrement} type="button">
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
