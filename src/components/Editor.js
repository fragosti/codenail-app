import React from 'react';
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
`

const Editor = ({value, onChange, language, theme, showGutter, showLineNumbers, fontSize, height, width, horPadding, verPadding, paddingColor}) => {
  return (
    <Container paddingColor={paddingColor} horPadding={horPadding} verPadding={verPadding} className={`ace-${theme.replace('_', '-')}`}>
      <AceEditor
        mode={language}
        height={`${height-verPadding*2}px`}
        width={`${width-horPadding*2}px`}
        theme={theme}
        value={value}
        fontSize={fontSize}
        onChange={onChange}
        showGutter={showGutter}
        showPrintMargin={false}
        highlightActiveLine={false}
        name="editor"
        editorProps={{$blockScrolling: true}}
        setOptions={{
          showLineNumbers: showLineNumbers,
          useWorker: false,
          fontFamily: 'Menlo',
          cursorStyle: 'slim',
        }}
      />
    </Container>
  )
};

Editor.defaultProps = {
  width: 700,
  height: 990,
  verPadding: 0,
  horPadding: 0,
};

export default Editor