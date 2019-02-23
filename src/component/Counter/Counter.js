import React, { Component } from 'react';

const images = ['A', 'B', 'C']

class Counter extends Component {
  state = {
    counterValue: this.props.initialValue,
    darkMode: false
  };

  handleIncrementClick = () => {
    this.setState({
      counterValue: (this.state.counterValue + this.props.delta) % this.props.range,
    });
  };

  handleDecrementClick = () => {
    this.setState({
      counterValue: (this.state.counterValue - this.props.delta + this.props.range) % this.props.range
    })
  }

  handleResetClick = () => {
    this.setState({
      counterValue: this.props.initialValue
    })
  }
  handleToggleMode = () => {
      this.setState({
          darkMode: !this.state.darkMode
      })
  }

  render() {
    return (
      <div style={{background: this.state.darkMode ? 'blue' : 'white'}}>
        <h1>{images[this.state.counterValue]}</h1>
        <h1>{this.state.counterValue}</h1>
        {
          // We display button only if parent component gives us prop named
          // `incrementParent` and its value is truthy.
          this.props.incrementParent && 
          <button onClick={this.props.incrementParent}>Increment parent</button>
        }
        <button onClick={this.handleToggleMode}>ToggleMode</button>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.handleDecrementClick}>Decrement</button>
        <button onClick={this.handleResetClick}>Reset</button>
      </div>
    );
  }
}

export default Counter;