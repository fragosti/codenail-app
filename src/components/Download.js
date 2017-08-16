import React from 'react';

import GenericOrder from './GenericOrder';


const Download = ({ price, description, isTest, options, history, search, openModal}) => {
  const summaryMap = {
    'Order Type': 'high resolution poster PNG file',
    'Order Price': `$${price}`,
    'Delivery Method': 'download link',
    'Dimensions': `${options.size} inches`,
  }
  return (
    <GenericOrder
      summaryMap={summaryMap}
      justDownload={true}
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

export default Download