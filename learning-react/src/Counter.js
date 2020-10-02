import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  }

  subtractCounter = () => {
    this.setState((state) => ({
      counter: state.counter - 1
    }))
  }

  resetCounter = () => {
    this.setState(() => ({
      counter: 0
    }))
  }

  render() {
    return <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.addCounter}>+</button>
      <button onClick={this.subtractCounter}>-</button>
      <button onClick={this.resetCounter}>reset</button>
    </div>
  }
}

export default Counter