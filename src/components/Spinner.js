import styled from 'styled-components'

import { rotate360 } from '../style/utils'

const Spinner = styled.div`
  border-radius: 50%;
  margin: 0 auto;
  width: 11em;
  height: 11em;
  font-size: ${props => props.scale}px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid ${props => props.rgbaColor};
  border-right: 1.1em solid ${props => props.rgbaColor};
  border-bottom: 1.1em solid ${props => props.rgbaColor};
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${rotate360} 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 11em;
    height: 11em;
  }
`

Spinner.defaultProps = {
  scale: 3,
  rgbaColor: 'rgba(255, 255, 255, 0.2)',
}

export default Spinner

