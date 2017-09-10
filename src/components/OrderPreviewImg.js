import React from 'react';
import Image from './Image';

import { colors } from '../style/utils';

const PrevImage = Image.extend`
  border: 2px solid ${colors.gray};
  border-radius: 3px;
  background-color: ${props => props.bgColor};
  background-image: ${props => `url(${props.bgImage})`};
  background-size: contain;
`

const OrderPreviewImg = ({id, width, backgroundColor, backgroundImage}) => (
  <PrevImage bgImage={backgroundImage} bgColor={backgroundColor} alt='Order preview' width={width} src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
)

export default OrderPreviewImg