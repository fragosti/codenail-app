import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import { getOrder } from '../lib/api';
import { getQueryParams } from '../lib/utils';

const Container = styled.div`
  margin: ${props => `${props.yMargin}px ${props.xMargin}px`};
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
    const margin = params.margin || 4
    if (!language) {
      return (
        <div> ...Loading </div>
      )
    }
    return (
      <Container xMargin={margin} yMargin={(height/width)*margin} width={width}>
        <Editor 
          language={language}
          theme={mode}
          value={value}
          fontSize={fontSize}
          onChange={() => {}}
          showLineNumbers={showLineNumbers}
          wrapEnabled={wrapEnabled}
          width={width}
          height={height}
          horPadding={horPadding}
          verPadding={verPadding}
        />
      </Container>
    )
  }
}

export default Render