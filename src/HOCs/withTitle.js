import React from 'react';
import { Helmet } from 'react-helmet';

export default (Component, title) => (
  class extends React.Component {
    render() {
      return (
        <div>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Component {...this.props}/>
        </div>
      )
    }
  }
)