import React, { Component } from 'react';

import Spinner from './Spinner';
import Flex from './Flex';
import withLoading from '../HOCs/withLoading';
import { colors } from '../style/utils';


class OrderPreview extends Component {

  render() {
    const { isLoading } = this.props
    return (isLoading ? (<Spinner scale={6} rgbaColor={colors.gray}/>) : (
      <Flex direction='column' alignItems='center'>
      Yo
      </Flex>
    ))
  }
}

export default withLoading(OrderPreview, true)