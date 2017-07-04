import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  position: relative;
  top: ${props => props.top || 0}px;
`

const icon = (name, size = 24, fill = "none") => {
  return {
    edit: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" fill={fill} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <line x1="3" y1="22" x2="21" y2="22" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" 
        fill={fill} stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" 
          fill={fill} stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
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