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
      }
    }

    startLoading = () => this.setState({isLoading: true})

    stopLoading = () => this.setState({isLoading: false})

    render() {
      return (
        <Component 
          {...this.props}
          isLoading={this.state.isLoading}
          startLoading={this.startLoading}
          stopLoading={this.stopLoading}
        />
      )
    }
  }
)