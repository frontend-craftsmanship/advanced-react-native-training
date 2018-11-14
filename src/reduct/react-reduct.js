import * as React from 'react';
import App from '../App';

let Reduct = React.createContext({});

// type Store = {
//   getState: () => Object,
//   dispatch: ({type: string, [key: string]: mixed}) => void,
//   subcribe: (Function) => Function,
// };

// type ProviderProps = {
//   store: Store,
//   children: React$Node,
// };

function Provider(props) {
  return (
    <Reduct.Provider value={props.store}>{props.children}</Reduct.Provider>
  );
}

function coduct(mapStateToProp, mapDispatchToProp) {
  return (Component) => {
    return class Enhancer extends React.Component {
      static contextType = Reduct;

      render() {
        let store = this.context;
        let deriviedState = mapStateToProp(store.getState());
        let deriviedAction = mapDispatchToProp(store.dispatch);
        return (
          <Component {...deriviedState} {...deriviedAction} {...this.props} />
        );
      }

      componentDidMount() {
        let store = this.context;
        this.unsubscribe = store.subscribe(this._handleUpdate);
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      _handleUpdate = () => {
        this.forceUpdate();
      };
    };
  };
}

export {Provider, coduct};
