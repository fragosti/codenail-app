import React from 'react';
import AceEditor from 'react-ace';

import { languages, themes } from './EditorControl';

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

const Editor = ({value, onChange, language, theme, showGutter, showLineNumbers, fontSize, height, width}) => {
  return (
    <AceEditor
      mode={language}
      height={`${height}px`}
      width={`${width}px`}
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
      }}
    />
  )
};

Editor.defaultProps = {
  width: 700,
  height: 990,
};

export default Editor