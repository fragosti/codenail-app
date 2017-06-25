import React, { Component } from 'react';
import styled from 'styled-components';

import OrderPreview from './OrderPreview';
import Spinner from './Spinner';
import { getOrder } from '../lib/api';
import { Container, Description } from './Page';

/* eslint-disable jsx-a11y/accessible-emoji */
const Emoji = styled.span`
  font-size: 1.8em;
  margin: 10px;
  position: relative;
  top: 3px;
`

class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      description: null,
      email: null,
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    const { stopLoading } = this.props
    getOrder(id).then(res => res.json()).then((order) => {
      this.setState({
        firstName: order.charge.source.name,
        description: order.charge.description,
        email: order.email,
      })
      stopLoading()
    })
  }

  render() {
    const { id } = this.props.match.params
    const { isLoading } = this.props
    const { firstName, description, email } = this.state
    return (
      <Container> 
        <Description>
          <h1> Thank you for your order! <Emoji>🎉</Emoji><Emoji>🎉</Emoji><Emoji>🎉</Emoji></h1>
          {isLoading ? <Spinner/> : (
            <p> Hi {firstName}, your {description} will be arriving shortly. A confirmation e-mail has been sent to <strong>{email}</strong>. </p>
          )}
          <Container>
            <OrderPreview id={id}/>
          </Container>
        </Description>
      </Container>
    )
  }
}
/* eslint-enable */
export default ThankYou