import React from 'react';
import styled from 'styled-components';

import { darken } from 'polished';
import { modularScale, grayscale } from 'polished';

import { colors } from '../style/utils';
import Icon from './Icon';

const ButtonBase = styled.a`
  background: ${props => props.disabled ? grayscale(props.color) : props.color};
  color: ${props => props.disabled ? colors.gray : 'black'};
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  display: inline-block;
  font-size: ${props => props.fontScale ? modularScale(props.fontScale) : '1em'};
  &:hover {
    background: ${props => !props.disabled && darken(0.1, props.color)};
  }
  &:active {
    background: ${props => !props.disabled && darken(0.3, props.color)};
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
export const IconButton = ({ name, size, onClick }) => ( <ButtonForIcon onClick={onClick}><Icon size={size} name={name}/></ButtonForIcon> )

export const Callout = styled.span`
  text-decoration: underline;
  font-weight: 600; 
  cursor: pointer;
`

export default Button;