import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { languages, themes, fontSizes } from './Editor';
import { zIndex } from '../style/utils';

import 'react-select/dist/react-select.css';

const EditorControlContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: ${zIndex.aboveEditor};
`

const StyledSelect = styled(Select)`
  width: 130px;
`

const OptionContainer = styled.div`
  margin: 10px 15px;
`

const SelectLabel = styled.label`
  font-weight: 700;
  padding: 6px 3px;
  display: inline-block;
`

const boolOption = [
  { value: true, label: 'Yes'},
  { value: false, label: 'No'},
]

const optionsForKey = {
  language: languages.map(lan => ({ value: lan, label: lan })),
  mode: themes.map(theme => ({ value: theme, label: theme })),
  fontSize: fontSizes.map(size => ({value: size, label: size})),
  showLineNumbers: boolOption,
  showGutter: boolOption,
}

const labelForKey = {
  language: 'Language',
  mode: 'Theme',
  showLineNumbers: 'Line Numbers?',
  showGutter: 'Show Gutter?',
  fontSize: 'Font Size',
}

const EditorControl = ({editorProps, onChange}) => {
  return (
    <EditorControlContainer>
      {Object.keys(editorProps).map((key, index) => {
        return (
          <OptionContainer key={index}>
            <SelectLabel>{labelForKey[key]}</SelectLabel>
            <StyledSelect 
              name={key}
              clearable={false}
              value={editorProps[key]}
              options={optionsForKey[key]}
              onChange={({value}) => onChange(key, value)}
            />
          </OptionContainer>
        )
      })}
    </EditorControlContainer>
  )
}

export default EditorControl