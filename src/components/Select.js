import Select from 'react-select';
import styled from 'styled-components';
import { modularScale } from 'polished';

import 'react-select/dist/react-select.css';

const StyledSelect = styled(Select)`
  width: 100px;
  input {
    color: transparent;
  }
`

export const OptionContainer = styled.div`
  margin: 10px 15px;
`

export const SelectLabel = styled.label`
  font-weight: 700;
  font-size: ${modularScale(-1)};
  padding: 6px 3px;
  display: inline-block;
`

export default StyledSelect