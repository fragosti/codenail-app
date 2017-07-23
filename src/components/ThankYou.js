import React, { Component } from 'react';
import styled from 'styled-components';
import { ShareButtons } from 'react-share';

import OrderPreview from './OrderPreview';
import Spinner from './Spinner';
import Icon from './Icon';
import { getOrder } from '../lib/api';
import { Container, Description } from './Page';

const { FacebookShareButton, TwitterShareButton } = ShareButtons

/* eslint-disable jsx-a11y/accessible-emoji */
const Emoji = styled.span`
  font-size: 1.8em;
  margin: 20px 10px;
  position: relative;
  top: 3px;
  display: inline-block;
`

const SocialShares = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ShareIconWrap = styled.div`
  margin-top: 40px;
  margin-right: 25px;
  margin-left: 25px;
  cursor: pointer;
  &:hover path {
    fill: ${props => props.hoverColor};
  }
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
    const social = {
      title: "Codenail",
      description: "Just ordered this awesome poster on Codenail!",
      url: "https://codenail.com/",
      picture: `https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`,
      hashtags: ['art', 'code', 'poster']
    }

    return (
      <Container> 
        <Description>
          <h1> Thank you for your order! <Emoji>🎉</Emoji><Emoji>🎉</Emoji><Emoji>🎉</Emoji></h1>
          {isLoading ? <Spinner/> : (
            <p> 
              Hi {firstName}, your {description} will be arriving shortly. A confirmation e-mail has been sent to <strong>{email}</strong>. 
            </p>
          )}
          <SocialShares>
            <FacebookShareButton 
              title={social.title}
              description={social.description}
              url={social.url}
              picture={social.picture}
            >
              <ShareIconWrap hoverColor='#3B5998'>
                <Icon name='facebook' size={40}/>
              </ShareIconWrap>
            </FacebookShareButton>
            <TwitterShareButton 
              title={social.title}
              url={social.url}
              via='codenail'
              hashtags={social.hashtags}
            >
              <ShareIconWrap hoverColor='#00aced'>
                <Icon name='twitter' size={40}/>
              </ShareIconWrap>
            </TwitterShareButton>
          </SocialShares>
          <Container>
            <p>Don't forget to share!</p>
            <OrderPreview id={id}/>
          </Container>
        </Description>
      </Container>
    )
  }
}
/* eslint-enable */
export default ThankYou