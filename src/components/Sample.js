import React from 'react';
import styled from 'styled-components';

import { PosterBack } from './Page';

const Image = styled.img`
  width: 300px;
`

const SampleWrap = PosterBack.extend`
  cursor: pointer;
  position: relative;
`


const Sample = ({id}) => (
  <SampleWrap>
    <Image src={`https://s3-us-west-2.amazonaws.com/codenail-order-previews/${id}.png`}/>
  </SampleWrap>
)

export default Sample