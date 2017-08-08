import React, { Component } from 'react';
import styled from 'styled-components';
import { ShareButtons } from 'react-share';
import { modularScale } from 'polished';

import withLoading from '../HOCs/withLoading';
import Spinner from './Spinner';
import Icon from './Icon';
import URLShare from './URLShare';
import Flex from './Flex';
import { CTA } from './Button';
import { createShare } from '../lib/api';
import { didShareOnFB } from '../lib/social';
import { colors } from '../style/utils';

const ShareIconWrap = styled.div`
  margin-top: 40px;
  margin-right: 25px;
  margin-left: 25px;
  cursor: pointer;
  &:hover path {
    fill: ${props => props.hoverColor};
  }
`

const Message = styled.section`
  margin: 15px 0px 20px;
  padding: 0px 20px;
  font-size: ${modularScale(0.5)};
  p {
    margin-bottom: 15px;
  }
`

const ConfirmContainer = Flex.extend`
  margin-top: 30px;
`

const ConfirmButton = CTA.extend`
  min-width: 150px;
`

const ConfirmMessage = styled.div`
  margin-bottom: 25px;
  font-style: italic;
  text-align: center;
`

const { FacebookShareButton, TwitterShareButton } = ShareButtons

const buttonCopy = 'Check & Claim';

class Share extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      errorMessage: null,
      buttonContent: buttonCopy,
      confirmMessage: props.hasCoupon ? `Thanks for sharing!` : `Click 'Check & Claim' once you've shared to claim a 10% discount!`,
    }
  }

  startLoadingButton = () => {
    this.setState({
      buttonContent: <Spinner scale={2} rgbaColor={colors.gray}/>,
    })
  }

  stopLoadingButton = () => {
    this.setState({
      buttonContent: buttonCopy,
    })
  }

  componentWillMount() {
    const { stopLoading, options } = this.props
    createShare({ options }).then(res => res.json())
    .then(({id}) => {
      this.setState({id})
      stopLoading()
    })
    .catch(() => this.setState({
      errorMessage: 'Sorry, something went wrong in creating your share link.'
    }))
  }

  render() {
    const { id, confirmMessage, buttonContent } = this.state;
    const { isLoading, applyCoupon, hasCoupon  } = this.props;
    const url = `https://codenail.com/create?shareId=${id}`;
    const social = {
      title: "Codenail",
      description: "Just created this awesome poster on Codenail!",
      hashtags: ['art', 'code', 'poster'],
      url,
    }
    return (isLoading ? (<Spinner scale={6} rgbaColor={colors.gray}/>) : (
      <Flex direction='column' alignItems='center'>
        <Message>
          <p>
            The link will allow your friends to see exactly what you have in the 
            editor right now.
          </p>
          {!hasCoupon && (
            <p>
              Share the link below on <strong>Facebook</strong> to get
              10% off any purchase!
            </p>
          )}
        </Message>
        <ConfirmMessage>{confirmMessage}</ConfirmMessage>
        <URLShare url={url} displayText={`codenail.com/create?shareId=${id}`}/>
        {!hasCoupon && (
          <ConfirmContainer direction='column' alignItems='center'> 
          <ConfirmButton
            onClick={() => {
              didShareOnFB(url).then((didShare) => {
                if (didShare) {
                  applyCoupon()
                  this.setState({ 
                    confirmMessage: `Thank you for sharing! Your coupon has been applied.`
                  })
                } else {
                  this.setState({ 
                    confirmMessage: `We could not find your share. Are you sure you shared the link?`
                  })
                }
              })
            }}
            >{buttonContent}</ConfirmButton>
          </ConfirmContainer>
        )}
        <Flex justifyContent='center'> 
          <FacebookShareButton 
            title={social.title}
            description={social.description}
            url={social.url}
          >
            <ShareIconWrap hoverColor='#3B5998'
              onClick={() => this.setState({
                showConfirmationButton: true,
                confirmMessage: 'Click below to claim your coupon!',
              })}
            >
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
        </Flex>
      </Flex>
    ))
  }
}

export default withLoading(Share, true)