// @flow

import * as React from 'react';
import LoginRenderProps from './LoginRenderProps';

function withLoginState(C: any) {
  let Enhancer = (props: any) => (
    <LoginRenderProps>
      {(values) => {
        return <C loginState={values} {...props} />;
      }}
    </LoginRenderProps>
  );
  return Enhancer;
}

export default withLoginState;
