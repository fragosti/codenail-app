import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.width}px;
`

Image.defaultProps = {
  width: 350,
}

export default Image