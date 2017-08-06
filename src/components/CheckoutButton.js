import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../img/logo.png';
import { STRIPE_KEY, TEST_STRIPE_KEY } from '../lib/api';


const CheckoutButton = ({ 
  onToken,
  price,
  description,
  isTest,
  opened,
  closed,
  children,
}) => (
  <StripeCheckout
    token={onToken}
    name='Codenail.com'
    image={logo}
    description={description}
    ComponentClass='span'
    amount={price}
    shippingAddress={true}
    billingAddress={true}
    stripeKey={isTest ? TEST_STRIPE_KEY : STRIPE_KEY}
    opened={opened}
    closed={closed}
  >
    {children}
  </StripeCheckout> 
)

export default CheckoutButton