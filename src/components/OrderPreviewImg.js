import React from 'react';
import Image from './Image';

const OrderPreviewImg = ({id, width}) => (
  <Image alt='Order preview' width={width} src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
)

export default OrderPreviewImg