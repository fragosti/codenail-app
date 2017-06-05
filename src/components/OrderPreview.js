import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 400px;
`

const OrderPreview = ({id}) => (
  <Image src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
)

export default OrderPreview