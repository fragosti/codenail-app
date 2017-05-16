import React from 'react';
import AceEditor from 'react-ace';

export const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css'
];

export const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
];

export const fontSizes = [6,8,10,12,14,16,18,20,22,24,26,28,30,32];

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
      height={height}
      width={width}
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
      }}
    />
  )
};

Editor.defaultProps = {
  width: '700px',
  height: '990px',
};

export default Editor