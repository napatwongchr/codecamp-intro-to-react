import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    console.log("Counter component is starting to mount to the DOM")
  }
  
  componentDidMount() {
    console.log("Counter component mounted in the DOM")
  }

  componentDidUpdate() {
    console.log("Counter component has been updated")
  }

  componentWillUnmount() {
    console.log("Counter component will be unmounted off the DOM")
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