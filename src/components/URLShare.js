import React, { Component } from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { modularScale } from 'polished';

import { IconButton } from './Button';

const URLDisplay = styled.span`
  font-size: ${modularScale(0)};
  background: rgba(0,0,0,.05);
  padding: 15px 20px;
  border-radius: 4px;
  display: inline-block;
  vertical-align: bottom;
`

const Copied = styled.div`
  font-style: italic;
  padding: 10px 0px;
  text-align: center;
  width: 100%;
`

class URLShare extends Component {
  state = {
    copied: false,
  }

  render() {
    const { displayText, url } = this.props
    const { copied } = this.state
    return (
      <div>
        <URLDisplay>{displayText || url}</URLDisplay>
        <CopyToClipboard 
          text={url}
          onCopy={() => {
            this.setState({copied: true})
            setTimeout(() => {
              this.setState({copied: false})
            }, 5000)
          }}
        >
          <IconButton name='link' size={31}/>
        </CopyToClipboard>
        {copied && <Copied>Copied!</Copied>}
      </div>
    )
  }
}

export default URLShare