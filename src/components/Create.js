import React, { Component } from 'react';
import styled from 'styled-components';

import Editor from './Editor';
import EditorControl from './EditorControl';
import { lineHeight } from '../style/utils';


const EditorContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const EditorWrapper = styled.div`
  padding: 32px;
  border-radius: 3px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Description = styled.section`
  max-width: 800px;
  padding: 20px 0px;
  line-height: ${lineHeight.text};
  h1 {
    font-weight: 700;
  }
`

const PaddedControl = styled(EditorControl)`
  padding: 20px 0px;
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
      fontSize: 12,
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
    const { language, fontSize, mode, showLineNumbers, showGutter, value } = this.state
    return (
      <Container>
        <Description> 
          <h1> Welcome to the editor! </h1> Copy & paste your code, specify the language, theme, font size and more. 
          You'll see the print preview live update as you go. Press continue once you're ready!
        </Description>
        <EditorContainer>
          <PaddedControl 
            onChange={this.onSettingsChange}
            editorProps={{
              language,
              mode,
              showLineNumbers,
              showGutter,
              fontSize
            }}
          />
          <EditorWrapper> 
            <Editor 
              language={language}
              theme={mode}
              value={value}
              fontSize={fontSize}
              onChange={this.onValueChange}
              showLineNumbers={showLineNumbers}
              showGutter={showGutter}
            />
          </EditorWrapper>
        </EditorContainer>
      </Container>
    )
  }

}

export default Create