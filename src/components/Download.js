import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Flex from './Flex';
import withLoading from '../HOCs/withLoading';
import CheckoutButton from './CheckoutButton';
import { Callout } from './Button';
import { createOrder } from '../lib/api';
import Spinner from './Spinner';
import { isPhone, colors } from '../style/utils';
import { Message, SpacedCTA } from './Modal';

const Table = styled.table`
  border: 2px dashed ${colors.gray};
  margin-bottom: 25px;
  border-radius: 4px;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
  tr {
    text-align: center;
  }
  td {
    padding: 10px;
  }
`

const LoadingMessage = styled.div`
  margin-top: 20px;
  font-weight: 600;
`

const SummaryTable = ({ summaryMap }) => (
  <Table>
    <tbody>
      {Object.keys(summaryMap).map((label) => (
        <tr key={label}>
          <td><strong>{label}: </strong></td> 
          <td>{summaryMap[label]}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

class Download extends Component {
  state = {
    errorMessage: null,
  }

  render() {
    const { price, description, isTest, options, history, search, openModal, isLoading, loadingMessage, startLoading, stopLoading } = this.props
    const summaryMap = {
      'Order Type': 'high resolution poster PNG file',
      'Order Price': `$${price}`,
      'Delivery Method': 'download link',
      'Dimensions': `${options.size} inches`,
    }
    const { errorMessage } = this.state
    return (isLoading ? (
      <Flex direction='column' alignItems='center'>
        <Spinner scale={6} rgbaColor={colors.gray}/>
        <LoadingMessage>{loadingMessage}</LoadingMessage>
      </Flex>
    ) : (
      <Flex direction='column' alignItems='center'>
        {errorMessage && <i>{errorMessage}</i>}
        <Message>
          <SummaryTable summaryMap={summaryMap}/>
          <p>
            Once you order you'll receive a confirmation e-mail with an order receipt and download link.
          </p>
          <p>
            More questions? Visit our <Link to='faq'><Callout>FAQ</Callout></Link> page. 
          </p>
        </Message>
        <Flex justifyContent='center'>
          <SpacedCTA onClick={() => openModal('preview')}> Preview </SpacedCTA>
          <CheckoutButton
            onToken={(token, addresses) => {
              startLoading('Processing your order...')
              createOrder({
                token,
                addresses,
                price: price*100,
                description,
                isTest,
                isPhone: isPhone(),
                options,
                justDownload: true,
              })
              .then(res => res.json())
              .then(({ id }) => {
                openModal('thankyou', id)
              })
              .catch((error) => {
                stopLoading()
                console.log(error)
                this.setState({ errorMessage: 'Sorry, something went wrong. Please try again later.'})
              })
            }}
            price={price*100}
            description={description}
            isTest={isTest}
            opened={() => {
              if (search) {
                history.push(`/create${search}&overlay=checkout`)
              } else {
                history.push(`/create?overlay=checkout`)
              }
            }}
            closed={() => history.goBack()}
          >
            <SpacedCTA color={colors.green}>Purchase</SpacedCTA>
          </CheckoutButton>
        </Flex>
      </Flex>
    ))
  }
}


export default withLoading(Download)