import React, { Component } from 'react';
import styled from 'styled-components';

import withLoading from '../HOCs/withLoading';
import Spinner from './Spinner';
import Flex from './Flex';


class Preview extends Component {
  state = {
    previewUrl: null
  }

  componentWillMount() {
    const { stopLoading, options } = this.props
    createPreview({ options }).then(res => res.json())
    .then(({previewUrl}) => {
      this.setState({previewUrl})
      stopLoading()
    })
    .catch(() => this.setState({
      errorMessage: 'Sorry, something went wrong in creating your preview.'
    }))
  }

  render() {
    const { isLoading } = this.props
    return (isLoading ? (<Spinner scale={6} rgbaColor={colors.gray}/>) : (
      <Flex direction='column' alignItems='center'>
        
      </Flex>
    ))
  }
}

export default withLoading(Preview, true)