import React, { Component } from 'react';
import { Error } from '../error/Error';

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) return <Error />;

    return (
      this.props.children
    );
  }
};

export { ErrorBoundry };