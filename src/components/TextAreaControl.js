import React from 'react';

import { SelectLabel } from './Select';
import TextArea from './TextArea';
import CheckBoxOption from './CheckBoxOption';

const TextAreaControl = ({ disabled, onChange, onCheckToggle }) => (
  <div>
    <SelectLabel>Text to use</SelectLabel>
    <TextArea disabled={disabled} onChange={onChange}/>
    <CheckBoxOption
      label='Use text in editor'
      checked={disabled}
      onCheckToggle={onCheckToggle}
    />
  </div>
)

export default TextAreaControl