import React from 'react';
import styled from 'styled-components';

import { SelectLabel } from './Select';
import TextArea from './TextArea';
import CheckBox from './CheckBox';

const Toggle = styled.div`
  label {
    cursor: pointer;
  }
`

const TextAreaControl = ({ disabled, onChange, onCheckToggle}) => (
  <div>
    <SelectLabel>Text to use</SelectLabel>
    <TextArea disabled={disabled} onChange={onChange}/>
    <Toggle onClick={() => onCheckToggle(!disabled)}>
      <CheckBox checked={disabled}/>
      <SelectLabel 
        bold={false}
      >Use text in editor</SelectLabel>
    </Toggle>
  </div>
)

export default TextAreaControl