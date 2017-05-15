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
  border-radius: 3px;
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
      value: '',
    }
  }

  onSettingsChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  onValueChange = (value) => {
    this.setState({ value })
  }

  render() {
    const { language, mode, showLineNumbers, showGutter, value } = this.state
    return (
      <EditorContainer>
        <EditorControl 
          onChange={this.onSettingsChange}
          editorProps={{
            language,
            mode,
            showLineNumbers,
            showGutter,
          }}
        />
        <EditorWrapper> 
          <Editor 
            language={language}
            theme={mode}
            value={value}
            onChange={this.onValueChange}
            showLineNumbers={showLineNumbers}
            showGutter={showGutter}
          />
        </EditorWrapper>
      </EditorContainer>
    )
  }

}

export default Create