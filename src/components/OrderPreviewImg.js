import React from 'react';
import Image from './Image';

const OrderPreviewImg = ({id}) => (
  <Image alt='Order preview' src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
)

export default OrderPreviewImg