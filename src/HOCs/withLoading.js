import React from 'react';

/**
  Use this HOC whenever you need a component with a simple loading state
  and want to keep things DRY.
*/
export default (Component, isLoading = false) => (
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: isLoading,
        loadingMessage: null,
      }
    }

    startLoading = (loadingMessage) => this.setState({isLoading: true, loadingMessage})

    stopLoading = () => this.setState({isLoading: false})

    render() {
      return (
        <Component 
          {...this.props}
          isLoading={this.state.isLoading}
          loadingMessage={this.state.loadingMessage}
          startLoading={this.startLoading}
          stopLoading={this.stopLoading}
        />
      )
    }
  }
)