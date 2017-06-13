import styled from 'styled-components';

import { lineHeight } from '../style/utils';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Description = styled.section`
  max-width: 800px;
  line-height: ${lineHeight.text};
  h1 {
    font-weight: 700;
  }
  p {
    padding: 15px 0px;
  }
`

export const PosterBack = styled.div`
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
  display: inline-block;
`