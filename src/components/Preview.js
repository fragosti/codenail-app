import React, { Component } from 'react';
import styled from 'styled-components';

import withLoading from '../HOCs/withLoading';
import Spinner from './Spinner';
import Flex from './Flex';
import { Message, SpacedCTA } from './Modal';
import OrderPreviewImg from './OrderPreviewImg';
import { createPreview } from '../lib/api';
import { colors } from '../style/utils';

const CTAs = Flex.extend`
  margin-top: 25px;
  justify-content: center;
`

const Disclaimer = styled.div`
  margin-top: 20px;
`

class Preview extends Component {
  state = {
    previewId: null
  }

  componentWillMount() {
    const { stopLoading, options, isPhone } = this.props
    createPreview(options, isPhone).then(res => res.json())
    .then(({ previewId }) => {
      this.setState({ previewId })
      stopLoading()
    })
    .catch(() => this.setState({
      errorMessage: 'Sorry, something went wrong in creating your preview.'
    }))
  }

  render() {
    const { isLoading, openModal } = this.props
    const { previewId } = this.state
    return (
      <Flex direction='column' alignItems='center'>
        <Message>
          <p> 
            The preview below is a low resolution version your order based on your current settings.
          </p>
          <p>
            Any order placed is guaranteed to be laid out like the image below 
            (there may be some small differences in the editor).
          </p>
        </Message>
        {isLoading && (
          <div>
            <Spinner scale={6} rgbaColor={colors.gray}/>
            <Disclaimer><i>It's worth the wait...</i><span role='img' aria-label='grin'>😁</span></Disclaimer>
          </div>
        )}
        {previewId && <OrderPreviewImg width={345} id={previewId}/>}     
        <CTAs justifyContent='center'> 
          <SpacedCTA onClick={() => openModal('order')}> Order </SpacedCTA>
          <SpacedCTA onClick={() => openModal('download')}> Download </SpacedCTA>
        </CTAs>   
      </Flex>
    )
  }
}

export default withLoading(Preview, true)