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
  font-weight: ${props => props.bold ? 700 : 500};
  font-size: ${modularScale(-1)};
  padding: 6px 3px;
  display: inline-block;
`

SelectLabel.defaultProps = {
  bold: true,
}

export const defaultOptionsForKey = (keys) => keys.map(x => ({ value: x, label: x}))

export default StyledSelect