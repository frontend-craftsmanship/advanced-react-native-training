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
        onIncrement: this._onIncrement,
        onDecrement: this._onDecrement,
      };
    }

    render() {
      return <Component counter={this.state} {...this.props} />;
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
