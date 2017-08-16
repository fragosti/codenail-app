import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

import Icon from './Icon';
import Flex from './Flex';
import { CTA } from './Button';
import { zIndex } from '../style/utils';

const Container = styled.div`
  width: 50%;
  min-width: 350px;
  max-width: 500px;
  border: 2px solid black;
  background: white;
  color: black;
  border-radius: 4px;
  padding: 20px 15px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
  z-index: ${zIndex.modal};
`

const Title = styled.h2`
  font-size: ${modularScale(2)};
  font-weight: 600;
  display: inline-block;
`
const Close = styled.div`
  display: inline-block;
  float: right;
  cursor: pointer;
`

const Header = styled.section`
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-bottom: 10px;
  margin-bottom: 15px;
`

const Body = styled.div`
  
`

export const CTAs = Flex.extend`
  margin-top: 25px;
  justify-content: center;
`
export const SpacedCTA = CTA.extend`
  margin: 0px 15px;
`

export const Message = styled.section`
  margin: 15px 0px 20px;
  padding: 0px 20px;
  font-size: ${modularScale(0.5)};
  p {
    margin-bottom: 15px;
    line-height: 1.05em;
  }
`

const Modal = ({title, close, children}) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <Close onClick={close}>
        <Icon name='x' size={35} top={-5}/>
      </Close>
    </Header>
    <Body>
      {children}
    </Body>
  </Container>
)

export default Modal;