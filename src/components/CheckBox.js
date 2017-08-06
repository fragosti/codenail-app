import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const CheckBox = ({ checked }) => (
  <StyledIcon top={7} name={checked ? 'square_check' : 'square'}/> 
)
  

export default CheckBox