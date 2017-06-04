import React, { Component } from 'react';

import { getOrder } from '../lib/api';

class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { id } = this.props.match.params
    getOrder(id).then(res => res.json()).then(({ options }) => this.setState(options))
  }

  render() {
    const { id } = this.props.match.params
    return (
      <div> 
        Thank you! 
        <img src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
      </div>
    )
  }
}

export default ThankYou