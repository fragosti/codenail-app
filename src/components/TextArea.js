import styled from 'styled-components';

import { colors } from '../style/utils';

const TextArea = styled.textarea`
  width: 100px;
  height: 100px;
  border-color: ${colors.gray};
  border-radius: 4px;
  display: block;
  background-color: ${props => props.disabled ? colors.lightGray : 'white'};
`

export default TextArea