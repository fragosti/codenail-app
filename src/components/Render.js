import React, { Component } from 'react';

import Editor from './Editor';
import { getOrder } from '../lib/api';
import { getQueryParams } from '../lib/utils';

const ZOOM = 3

class Render extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { id } = this.props.match.params
    getOrder(id).then(res => res.json()).then(({ options }) => this.setState(options))
  }

  render() {
    const { language, mode, value, fontSize, showLineNumbers, showGutter, width, height } = this.state 
    const params = getQueryParams(this.props.location.search)
    const zoom = parseInt(params.zoom, 10) || ZOOM
    if (!language) {
      return (
        <div> ...Loading </div>
      )
    }
    return (
      <Editor 
        language={language}
        theme={mode}
        value={value}
        fontSize={fontSize*zoom}
        onChange={() => {}}
        showLineNumbers={showLineNumbers}
        showGutter={showGutter}
        width={width*zoom}
        height={height*zoom}
      />
    )
  }
}

export default Render