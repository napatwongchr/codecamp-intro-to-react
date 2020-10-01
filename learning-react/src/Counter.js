import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.addCounter = this.addCounter.bind(this)
    this.resetCounter = this.resetCounter.bind(this)
    this.subtractCounter = this.subtractCounter.bind(this)
  }
  
  addCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  subtractCounter() {
    this.setState({ counter: this.state.counter - 1 })
  }

  resetCounter() {
    this.setState({ counter: 0 })
  }

  render() {
    return <div className="counter-container">
      <h1>{this.state.counter}</h1>
      <button className="add-button" onClick={this.addCounter}>+</button>
      <button className="subtract-button" onClick={this.subtractCounter}>-</button>
      <button className="reset-button" onClick={this.resetCounter}>Reset</button>
    </div>
  }
}

export default Counter