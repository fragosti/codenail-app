import React from 'react';
import styled from 'styled-components';

import { Container, Description } from './Page';
import { printPrices, framedPrintPrices, inToCm } from '../lib/price';

const Table = styled.table`
  width: 350px;
  table-layout: fixed;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
  tr {
    text-align: center;
    border-bottom: 1px solid #999;
  }
`

const CenterHeader = styled.h2`
  text-align: center;
`

const PriceTable = ({priceMap}) => (
  <Table>
    <thead>
      <tr> 
        <th><i>Size (inches)</i></th>
        <th><i>Size (cm)</i></th>
        <th><i>Price</i></th>
      </tr> 
    </thead>
    <tbody>
      {Object.keys(priceMap).map((size) => (
        <tr key={size}> 
          <td>{size}</td>
          <td>{inToCm(size)}</td>
          <td>${priceMap[size]}.00</td>
        </tr> 
      ))}
    </tbody>
  </Table>
)

const Pricing = () => (
  <Container>
    <Description>
      <h1> Pricing </h1>
      <p> 
        It's possible to order posters with inverted aspect ratios (36x24 instead of 24x36 for example). 
        In that case, the pricing is the same - it's the total dimensions that count. 
      </p>
      <CenterHeader> Poster Prints: </CenterHeader>
      <PriceTable priceMap={printPrices} /> 
      <br/>
      <CenterHeader> Framed Poster Prints: </CenterHeader>
      <PriceTable priceMap={framedPrintPrices} /> 
    </Description>
  </Container>
)

export default Pricing