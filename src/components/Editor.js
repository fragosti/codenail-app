import React, { Component } from 'react';
import AceEditor from 'react-ace';

import styled from 'styled-components';
import { languages, themes } from './EditorControl';

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

const Container = styled.div`
  padding: ${props => props.verPadding}px ${props => props.horPadding}px;
  ${props => props.paddingColor !== 'none' && `background-color: ${props.paddingColor} !important;`} 

  .ace_scrollbar-h, .ace_scrollbar-v {
    visibility: hidden;
  }

  .ace_editor .ace_marker-layer .ace_bracket { 
    visibility: hidden;
  }

  .ace_scroller {
    right: 0px !important;
    bottom: 0px !important;
  }
`

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasForceUpdated: false,
    }
  }

  componentDidUpdate(prevProps) {
    // Hack to fix scrolling issues after a resize
    if (prevProps.height !== this.props.height && this.ace) {
      window.dispatchEvent(new Event('resize'));
    }
  }

  render() {
    const { hasForceUpdated } = this.state
    const { value, onChange, language, theme, wrapEnabled, showLineNumbers, fontSize, height, width, horPadding, verPadding, paddingColor } = this.props
    const adjustedHeight = height-verPadding*2
    const adjustedWidth = width-horPadding*2
    return (
      <Container paddingColor={paddingColor} horPadding={horPadding} verPadding={verPadding} className={`ace-${theme.replace('_', '-')}`}>
        <AceEditor
          ref={(ref) => {
            if (ref) {
              this.ace = ref
              // Hack to allow cases where people want a very long continuous line with small font.
              if (fontSize < 9 && !hasForceUpdated) {
                ref.editor.session.bgTokenizer.tokenizer.$setMaxTokenCount(3000)
                ref.editor.setValue(value, 1)
                this.setState({ hasForceUpdated: true })
              }
            }
          }}
          mode={language}
          height={`${adjustedHeight}px`}
          width={`${adjustedWidth}px`}
          theme={theme}
          value={value}
          fontSize={fontSize}
          onChange={onChange}
          showGutter={showLineNumbers}
          wrapEnabled={wrapEnabled}
          showPrintMargin={false}
          highlightActiveLine={false}
          name="editor"
          editorProps={{$blockScrolling: Infinity}}
          setOptions={{
            showLineNumbers: showLineNumbers,
            useWorker: false,
            fontFamily: "'Menlo', 'Monaco', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
            cursorStyle: 'slim',
            hScrollBarAlwaysVisible: false,
            vScrollBarAlwaysVisible: false,
            displayIndentGuides: false,
          }}
        />
      </Container>
    )
  }
}

Editor.defaultProps = {
  width: 700,
  height: 990,
  verPadding: 0,
  horPadding: 0,
};

export default Editor