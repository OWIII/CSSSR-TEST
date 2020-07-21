import React from 'react';
import Context from '../context/context'

export const connect = (mapStateToProps, mapDispatchToProps) =>
  Component => {
    class WrappedComponent extends React.Component {
      store = this.context;

      componentDidMount() {
        this.store.subscribe(this.handleChange)
      }

      componentWillUnmount() {
        this.store.subscribe && this.store.unsubscribe(this.handleChange);
      }

      handleChange = () => {
        this.forceUpdate()
      }

      render() {
        return (
          <Component
            {...this.props}
            {...mapStateToProps(this.store.getState())}
            {...mapDispatchToProps(this.store.dispatch)}
          />
        )
      }
    }

    WrappedComponent.contextType = Context;

    return WrappedComponent;
  };
