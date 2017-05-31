import React, { Component } from 'react';

import Editor from './Editor';
import { getOrder } from '../lib/api';

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
        fontSize={fontSize}
        onChange={() => {}}
        showLineNumbers={showLineNumbers}
        showGutter={showGutter}
        width={width}
        height={height}
      />
    )
  }
}

export default Render