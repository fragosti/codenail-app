import React from 'react';
import styled from 'styled-components';

import Flex from './Flex';
import Social from './Social';
import URLShare from './URLShare';
import { CTALink } from './Button';
import { Message } from './Modal';

const Download = CTALink.extend`
  margin-bottom: 30px;
`

const ShareMsg = styled.div`
  font-style: italic;
  margin-bottom: 15px;
`

const ThankYou = ({ id }) => {
  const shareUrl = `https://codenail.com/create?shareId=${id}`;
  const screenshotUrl = `https://s3-us-west-2.amazonaws.com/codenail-order-screenshots/${id}.png`
  return (
    <Flex alignItems='center' direction='column'>
      <Message>
        <p> 
          Thank you for ordering!
        </p>
      </Message>
      <Download to={screenshotUrl} target='_blank'> Download Print File </Download>
      <ShareMsg> Don't forget to share! </ShareMsg>
      <URLShare url={shareUrl} displayText={`codenail.com/create?shareId=${id}`}/>
      <Social url={shareUrl}/>
    </Flex>
  )
}

export default ThankYou