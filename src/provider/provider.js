import React from 'react';
import Context from '../context/context';

export class Provider extends React.Component {

  render() {
    const { store, children } = this.props;
    return <Context.Provider value={store}>{children}</Context.Provider>
  }
};
