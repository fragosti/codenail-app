import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 350px;
`

const OrderPreview = ({id}) => (
  <Image alt='Order preview' src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
)

export default OrderPreview