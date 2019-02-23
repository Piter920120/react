import React, { Component } from 'react';
import Counter from './Counter';

class CounterFest extends Component {
  state = {
    superCounterValue: 0,
  };

  incrementCounter = () => {
    this.setState({
      superCounterValue: this.state.superCounterValue + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.superCounterValue}</h1>
        <hr />
        <Counter
          initialValue={0}
          delta={1}
          range={3}
          incrementParent={this.incrementCounter}
        />
        <Counter initialValue={10} delta={5} range={10} />
        <Counter initialValue={20} delta={10} range={100} />
      </div>
    );
  }
}

export default CounterFest;