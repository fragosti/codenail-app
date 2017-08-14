import React, { Component } from 'react';
import styled from 'styled-components';

import withLoading from '../HOCs/withLoading';
import Spinner from './Spinner';
import URLShare from './URLShare';
import Flex from './Flex';
import { Message } from './Modal';
import Social from './Social';
import { CTA } from './Button';
import { createShare } from '../lib/api';
import { didShareOnFB } from '../lib/social';
import { colors } from '../style/utils';


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

const buttonCopy = 'Claim';

class Share extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      errorMessage: null,
      buttonContent: buttonCopy,
      confirmMessage: props.hasCoupon ? `Thanks for sharing!` : `Click 'Claim' once you've shared to claim a 10% discount!`,
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
        <Social url={url}/> 
      </Flex>
    ))
  }
}

export default withLoading(Share, true)