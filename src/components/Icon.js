import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;
  top: ${props => props.top}px;
`

const icon = (name, size) => {
  return {
    edit: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <line x1="3" y1="22" x2="21" y2="22" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      </svg>
    )
  }[name]
}

const Icon = ({name, size, top, className}) => (
  <Container className={className} top={top}> 
    {icon(name, size)}
  </Container>
)

export default Icon