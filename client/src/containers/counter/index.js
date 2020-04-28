import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  handleMultiply = () => {
    this.setState({ counter: this.state.counter * 2 });
  };
  handleDivide = () => {
    this.setState({ counter: this.state.counter / 2 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment +1</button>
        <button onClick={this.handleDecrement}>Decrement -1</button>
        <button onClick={this.handleMultiply}>Multiply *2</button>
        <button onClick={this.handleDivide}>Divide /2</button>
      </div>
    );
  }
}

export default Counter;
