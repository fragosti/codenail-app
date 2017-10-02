import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.width}px;
  display: ${props => props.display};
`

Image.defaultProps = {
  width: 350,
  display: 'block',
}

export default Image