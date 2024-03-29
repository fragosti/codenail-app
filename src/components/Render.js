import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import { getShare } from '../lib/api';
import { getQueryParams } from '../lib/utils';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  overflow: auto;
`;

const Container = styled.div`
  margin: ${props => `${props.yMargin}px ${props.xMargin}px`};
  width: ${props => props.width}px;
  .ace_cursor-layer {
    display: none;
  }
`;

class Render extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { id } = this.props.match.params
    getShare(id).then(res => res.json()).then(({ options }) => this.setState(options))
  }

  componentDidUpdate() {
    if (window.callPhantom && this.state.language) {
      window.callPhantom('takeShot')
    }
  }

  render() {
    const { 
      language, 
      mode, 
      value, 
      fontSize, 
      showLineNumbers, 
      wrapEnabled, 
      width, 
      height, 
      horPadding, 
      verPadding,
      colorMode,
      backgroundColor,
      textColor,
      productType,
    } = this.state 
    const params = getQueryParams(this.props.location.search)
    const margin = params.margin || 6
    const scale = params.scale || 1
    if (!language) {
      return (
        <div> ...Loading </div>
      )
    }
    
    return (
      <Background color={productType === 'shirt' ? null : 'white'}>
        <Container 
          xMargin={margin} 
          yMargin={(height/width)*margin} 
          width={width*scale}
        >
          <Editor 
            language={language}
            theme={mode}
            value={value}
            fontSize={fontSize*scale}
            onChange={() => {}}
            showLineNumbers={showLineNumbers}
            wrapEnabled={wrapEnabled}
            width={width*scale}
            height={height*scale}
            horPadding={horPadding*scale}
            verPadding={verPadding*scale}
            colorMode={colorMode}
            backgroundColor={backgroundColor}
            textColor={textColor}
            productType={productType}
          />
        </Container>
      </Background>
    )
  }
}

export default Render