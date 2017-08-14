import React, { Component } from 'react';

import withLoading from '../HOCs/withLoading';
import Spinner from './Spinner';
import Flex from './Flex';
import { Message } from './Modal';
import { CTA } from './Button';
import OrderPreviewImg from './OrderPreviewImg';
import { createPreview } from '../lib/api';
import { colors } from '../style/utils';

const CTAs = Flex.extend`
  margin-top: 25px;
`
const MarginCTA = CTA.extend`
  margin: 0px 15px;
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
          <p> 
            Like what you see? Download or Order!
          </p>
        </Message>
        {isLoading && <Spinner scale={6} rgbaColor={colors.gray}/>}
        {previewId && <OrderPreviewImg width={345} id={previewId}/>}     
        <CTAs justifyContent='center'> 
          <MarginCTA onClick={() => openModal('order')}> Order </MarginCTA>
          <MarginCTA onClick={() => openModal('download')}> Download </MarginCTA>
        </CTAs>   
      </Flex>
    )
  }
}

export default withLoading(Preview, true)