import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import EditorControl from './EditorControl';

const EditorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
`

const EditorWrapper = styled.div`
  padding: 32px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
`

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'javascript',
      mode: 'monokai',
      showLineNumbers: true,
      showGutter: true,
    }
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const { language, mode, showLineNumbers, showGutter } = this.state
    return (
      <EditorContainer>
        <EditorControl 
          onChange={this.onChange}
          editorProps={this.state}
        />
        <EditorWrapper> 
          <Editor 
            language={language}
            theme={mode}
            showLineNumbers={showLineNumbers}
            showGutter={showGutter}
          />
        </EditorWrapper>
      </EditorContainer>
    )
  }

}

export default Create