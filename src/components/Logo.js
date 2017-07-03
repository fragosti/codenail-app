import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { modularScale } from 'polished';

import { media } from '../style/utils';

import Icon from './Icon';

const LogoIcon = styled(Icon)`
  margin-left: 5px;
`

const LogoContainer = styled(Link)`
  font-size: ${modularScale(2)};
  line-height: ${modularScale(2)};
  font-weight: 900;
  font-family: 'Menlo', 'Monaco', monospace;
  padding: 6px;
  ${media.phone`
    font-size: ${modularScale(1)};
  `}
`

const Logo = ({children, to}) => (
  <LogoContainer to={to}>
    {children}
    <LogoIcon top={2} name='edit' size={27}/>
  </LogoContainer>
)

export default Logo;