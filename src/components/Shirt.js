import React from 'react';
import styled from 'styled-components';

import { shirts } from '../lib/products';

const ShirtImage = styled.img`
  background-color: ${props => props.color};
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: contain;
`

const Shirt = ({ colorKey, width, className }) => {
  const { src, color, backgroundImage } = shirts[colorKey]
  return (
    <ShirtImage 
      className={className}
      src={src}
      color={color}
      backgroundImage={backgroundImage}
    />
  )
}

export default Shirt