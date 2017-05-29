import React, { Component } from 'react';

import Editor from './Editor';

class Render extends Component {

  componentWillMount() {

  }

  render() {
    const { language, mode, value, fontSize, showLineNumbers, showGutter, width, height } = this.state 
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