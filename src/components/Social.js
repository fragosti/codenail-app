import React from 'react';
import styled from 'styled-components';
import { ShareButtons } from 'react-share';

import Flex from './Flex';
import Icon from './Icon';

const { FacebookShareButton, TwitterShareButton } = ShareButtons

const ShareIconWrap = styled.div`
  margin-top: 40px;
  margin-right: 25px;
  margin-left: 25px;
  cursor: pointer;
  &:hover path {
    fill: ${props => props.hoverColor};
  }
`

const Social = ({ url }) => {
  const social = {
    title: "Codenail",
    description: "Just created this awesome poster on Codenail!",
    hashtags: ['art', 'code', 'poster'],
    url,
  }
  return (
    <Flex justifyContent='center'> 
      <FacebookShareButton 
        title={social.title}
        description={social.description}
        url={social.url}
      >
        <ShareIconWrap hoverColor='#3B5998'>
          <Icon name='facebook' size={40}/>
        </ShareIconWrap>
      </FacebookShareButton>
      <TwitterShareButton 
        title={social.title}
        url={social.url}
        via='codenail'
        hashtags={social.hashtags}
      >
        <ShareIconWrap hoverColor='#00aced'>
          <Icon name='twitter' size={40}/>
        </ShareIconWrap>
      </TwitterShareButton>
    </Flex>
  )
}

export default Social
