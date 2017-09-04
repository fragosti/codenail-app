import React from 'react';

import GenericOrder from './GenericOrder';


const Order = ({ price, description, isTest, options, history, search, openModal}) => {
  const summaryMapBase = {
    'Order Type': `${options.amount} ${options.productType}${options.amount > 1 ? 's' : ''}`,
    'Order Price': `$${price}`,
    'Shipping Price': 'free',
    'Shipping Time': '3-5 business days',
  }
  let summaryOverrides = {}
  switch(options.productType) {
    case 'shirt':
      summaryOverrides = {
        'Size': `${options.shirtSize}`,
      }
      break
    default:
    case 'poster':
      summaryOverrides = {
        'Framed': options.framed ? 'yes' : 'no',
        'Dimensions': `${options.size} inches`,
      }
      break
  }
  const summaryMap = Object.assign({}, summaryMapBase, summaryOverrides)
  return (
    <GenericOrder
      summaryMap={summaryMap}
      price={price}
      description={description}
      isTest={isTest}
      options={options}
      history={history}
      search={search}
      openModal={openModal}
    />
  )
}

export default Order