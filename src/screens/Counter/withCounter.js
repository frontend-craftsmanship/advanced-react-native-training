// @flow

import * as React from 'react';

type State = {
  counter: number,
};

function withCounter<T>(Component: React.ComponentType<T>) {
  return class Enhancer extends React.Component<T, State> {
    constructor() {
      super(...arguments);
      this.state = {
        counter: 0,
      };
    }

    render() {
      return (
        <Component
          counter={this.state.counter}
          onIncrement={this._onIncrement}
          onDecrement={this._onDecrement}
          {...this.props}
        />
      );
    }

    _onIncrement = () => {
      this.setState({counter: this.state.counter + 1});
    };

    _onDecrement = () => {
      this.setState({counter: this.state.counter - 1});
    };
  };
}

export default withCounter;
