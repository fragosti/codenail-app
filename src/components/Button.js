import React from 'react';
import styled from 'styled-components';

import { darken } from 'polished';
import { modularScale } from 'polished';

import { colors } from '../style/utils';
import Icon from './Icon';

const ButtonBase = styled.a`
  background: ${props => props.color};
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
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
  padding: 10px 15px;
  width: ${props => props.width};
`


export const CTA = ButtonBase.extend`
  border: 2px solid black;
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px 30px;
  letter-spacing: .3px;
`

const ButtonForIcon = Button.extend`
  padding: 5px 10px;
`
export const IconButton = ({ name, onClick }) => ( <ButtonForIcon onClick={onClick}><Icon name={name}/></ButtonForIcon> )


export default Button;