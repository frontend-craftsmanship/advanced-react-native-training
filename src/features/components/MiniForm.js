// @flow

import * as React from 'react';

type Obj = {[key: string]: any};

type Props = {
  initialValues: Obj,
  children: ({
    values: Obj,
    errors: ?Obj,
    setValue: (string, mixed) => void,
  }) => React$Node,
  validation: {[key: string]: (mixed) => boolean},
};

type State = {
  values: Obj,
  errors: ?Obj,
};

class MiniForm extends React.Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      values: this.props.initialValues || {},
      errors: null,
    };
  }

  render() {
    let {children} = this.props;
    let setValue = this._setValue;
    return children({
      ...this.state,
      setValue,
    });
  }

  /*
    @private
    setValues is trigged right after user changes the input
  */

  _setValue = (key, value) => {
    let isValid = this._runValidation(key, value);
    this.setState((state) => ({
      ...state,
      values: {
        ...state.values,
        [key]: value,
      },
      errors: {
        ...state.errors,
        [key]: isValid || !value ? null : `${key} is invalid`,
      },
    }));
  };

  _runValidation = (key, value) => {
    let {validation} = this.props;
    if (validation[key]) {
      return validation[key](value);
    } else {
      return value;
    }
  };
}

export default MiniForm;
