import styled from 'styled-components';

import { darken } from 'polished';
import { modularScale } from 'polished';

import { colors } from '../style/utils';

const ButtonBase = styled.a`
  background: ${props => props.color};
  cursor: pointer;
  font-size: ${props => props.fontScale ? modularScale(props.fontScale) : '1em'};
  &:hover {
    background: ${props => darken(0.1, props.color)};
  }
  &:active {
    background: ${props => darken(0.3, props.color)};
  } 
`

ButtonBase.defaultProps = {
  color: 'white',
}

const Button = ButtonBase.extend`
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  padding: 10px 15px;
  width: ${props => props.width};
`


export const CTA = ButtonBase.extend`
  border: 2px solid black;
  border-radius: 4px;
  font-weight: 600;
  height: 40px;
  text-transform: uppercase;
  padding: 10px 30px;
  letter-spacing: .3px;
`

export default Button;