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

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})

const Editor = ({value, onChange, language, theme, showGutter, showLineNumbers, height, width}) => {
  return (
    <AceEditor
      mode={language}
      height={height}
      width={width}
      theme={theme}
      value={value}
      onChange={onChange}
      showGutter={showGutter}
      showPrintMargin={false}
      highlightActiveLine={false}
      name="editor"
      setOptions={{
        showLineNumbers: showLineNumbers,
        useWorker: false,
      }}
    />
  )
};

Editor.defaultProps = {
  width: '700px',
  height: '800px',
};

export default Editor