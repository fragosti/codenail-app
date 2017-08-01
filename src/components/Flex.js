import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  align-items: ${props => props.alignItems || 'normal'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  
  ${props => props.margin && `margin: ${props.margin};`}
`;

export default Flex
