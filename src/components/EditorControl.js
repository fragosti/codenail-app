import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { languages, themes } from './Editor';
import 'react-select/dist/react-select.css';

const EditorControlContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const StyledSelect = styled(Select)`
  width: 150px;
  margin: 10px 15px;
`

const boolOption = [
  { value: true, label: 'Yes'},
  { value: false, label: 'No'},
]

const optionsForKey = {
  language: languages.map(lan => ({ value: lan, label: lan })),
  mode: themes.map(theme => ({ value: theme, label: theme })),
  showLineNumbers: boolOption,
  showGutter: boolOption,
}

const EditorControl = ({editorProps, onChange}) => {
  return (
    <EditorControlContainer>
      {Object.keys(editorProps).map((key, index) => {
        return (
          <StyledSelect
            key={index} 
            name={key}
            clearable={false}
            value={editorProps[key]}
            options={optionsForKey[key]}
            onChange={({value}) => onChange(key, value)}
          />
        )
      })}
    </EditorControlContainer>
  )
}

export default EditorControl