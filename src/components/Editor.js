import React from 'react';
import AceEditor from 'react-ace';

const languages = [
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

const themes = [
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

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

const Editor = ({languange, theme, showGutter, showLineNumbers, height, width}) => {
  return <AceEditor
    mode={languange}
    height={height}
    width={width}
    theme={theme}
    showGutter={showGutter}
    showPrintMargin={false}
    highlightActiveLine={false}
    name="editor"
    setOptions={{
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: showLineNumbers,
      useWorker: false,
    }}
  />
}

Editor.defaultProps = {
  languange: 'javascript',
  theme: 'monokai',
  showLineNumbers: true,
  showGutter: true,
  showPrintMargin: true,
  width: '700px',
  height: '800px',
}

export default Editor