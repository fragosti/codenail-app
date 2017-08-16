import React from 'react';

import GenericOrder from './GenericOrder';


const Order = ({ price, description, isTest, options, history, search, openModal}) => {
  const summaryMap = {
    'Order Type': 'printed poster',
    'Order Price': `$${price}`,
    'Shipping Price': 'free',
    'Shipping Time': '3-5 business days',
    'Framed': options.framed ? 'yes' : 'no',
    'Dimensions': `${options.size} inches`,
  }
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