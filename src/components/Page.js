import styled from 'styled-components';

import { lineHeight } from '../style/utils';
import { modularScale } from 'polished';



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
    font-size: ${modularScale(2)};
    padding: 15px 0px;
  }
  h2 {
    font-weight: 600;
  }
  p {
    padding-bottom: 20px;
  }
`

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const PosterBack = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: white;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
  display: inline-block;
`