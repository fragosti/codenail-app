import React from 'react';
import Select, { SelectLabel, OptionContainer, defaultOptionsForKey }  from './Select';
import styled from 'styled-components';

import { zIndex } from '../style/utils';
import { concatMap, flipAround } from '../lib/utils';


export const languages = [
  'plain_text',
  'javascript',
  'java',
  'swift',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'prolog',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'objectivec',
  'lisp',
  'css',
  'perl',
  'scala',
  'sql',
  'yaml',
  'diff',
  'elm',
  'haskell',
  'jsx',
  'kotlin',
  'makefile',
  'matlab',
  'php',
  'rust',
  'clojure',
  'c_cpp',
].sort();

export const themes = [
  'monokai',
  'github',
  'chaos',
  'ambiance',
  'tomorrow_night',
  'vibrant_ink',
  'pastel_on_dark',
  'tomorrow',
  'kuroir',
  'clouds',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
  'chrome',
  'eclipse',
  'dawn',
].sort();

export const fontSizes = [2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,11,12,13,14,15,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50];

export const paddingOptions = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200];

export const paddingColors = ['none', 'white', 'black'];

export const sizes = concatMap([
  '8x10',
  '10x10',
  '12x12',
  '12x16',
  '12x18',
  '14x14',
  '16x16',
  '16x20',
  '18x18',
  '18x24',
  '24x36',
], (dim) => {
  const flipDim = flipAround(dim, 'x')
  return flipDim === dim ? null : flipDim
}).filter(x => x !== null);

const EditorControlContainer = styled.div`
  display: flex;
  max-width: 750px;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: ${zIndex.aboveEditor};
`

const boolOption = [
  { value: true, label: 'yes'},
  { value: false, label: 'no'},
]

const optionsForKey = {
  language: defaultOptionsForKey(languages),
  mode: defaultOptionsForKey(themes),
  fontSize: defaultOptionsForKey(fontSizes),
  size: defaultOptionsForKey(sizes),
  showLineNumbers: boolOption,
  framed: boolOption,
  horPadding: defaultOptionsForKey(paddingOptions),
  verPadding: defaultOptionsForKey(paddingOptions),
  paddingColor: defaultOptionsForKey(paddingColors),
  wrapEnabled: boolOption,
}

const labelForKey = {
  language: 'Language',
  mode: 'Theme',
  showLineNumbers: 'Line Numbers?',
  fontSize: 'Font Size',
  size: 'Size (in)',
  framed: 'Framed?',
  horPadding: 'X-Axis Padding',
  verPadding: 'Y-Axis Padding',
  paddingColor: 'Padding Color',
  wrapEnabled: 'Wrap lines?',
}

const EditorControl = ({editorProps, onChange, className}) => {
  return (
    <EditorControlContainer className={className}>
      {controls(editorProps, onChange)}
    </EditorControlContainer>
  )
}

export const controls = (editorProps, onChange) => {
  return Object.keys(editorProps).map((key, index) => {
    return (
      <OptionContainer key={index}>
        <SelectLabel>{labelForKey[key]}</SelectLabel>
        <Select 
          name={key}
          clearable={false}
          value={editorProps[key]}
          options={optionsForKey[key]}
          onChange={({value}) => onChange(key, value)}
        />
      </OptionContainer>
    )
  })
}

export default EditorControl