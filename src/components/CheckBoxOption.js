import React from 'react';
import styled from 'styled-components';

import { SelectLabel } from './Select';
import CheckBox from './CheckBox';

const Toggle = styled.div`
  label {
    cursor: pointer;
  }
`

const CheckBoxOption = ({ label, checked, onCheckToggle }) => (
  <Toggle onClick={() => onCheckToggle(!checked)}>
    <CheckBox checked={checked}/>
    <SelectLabel 
      bold={false}
    >{label}</SelectLabel>
  </Toggle>
)

export default CheckBoxOption