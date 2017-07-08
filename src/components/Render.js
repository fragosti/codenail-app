import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import { getOrder } from '../lib/api';
import { getQueryParams } from '../lib/utils';

const Container = styled.div`
  padding: ${props => props.padding}px;
  background: white;
  width: ${props => props.width}px;
`

class Render extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { id } = this.props.match.params
    getOrder(id).then(res => res.json()).then(({ options }) => this.setState(options))
  }

  componentDidMount() {
    window.callPhantom && window.callPhantom('takeShot')
  }

  render() {
    const { language, mode, value, fontSize, showLineNumbers, wrapEnabled, width, height, horPadding, verPadding } = this.state 
    const params = getQueryParams(this.props.location.search)
    const padding = params.padding || 5
    if (!language) {
      return (
        <div> ...Loading </div>
      )
    }
    return (
      <Container padding={padding} width={width}>
        <Editor 
          language={language}
          theme={mode}
          value={value}
          fontSize={fontSize}
          onChange={() => {}}
          showLineNumbers={showLineNumbers}
          wrapEnabled={wrapEnabled}
          width={width-padding*2}
          height={height-padding*2}
          horPadding={horPadding}
          verPadding={verPadding}
        />
      </Container>
    )
  }
}

export default Render