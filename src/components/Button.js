import styled from 'styled-components';

import { colors } from '../style/utils';
import { darken } from 'polished';

const Button = styled.a`
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  width: ${props => props.width};
  background: ${props => props.color};
  &:hover {
    background: ${props => darken(0.2, props.color)};
  }
  &:active {
    background: ${props => darken(0.4, props.color)};
  }
`
Button.defaultProps = {
  color: 'white',
}

export default Button;