const getEndpoint = (env) => {
  switch(env) {
    case 'staging':
      return ''
    case 'production':
      return 'https://t46e391x1a.execute-api.us-west-2.amazonaws.com/production'
    default:
    case 'development':
      return 'http://localhost:8000/dev'
  }
}

export const LIVE_STRIPE_KEY = 'pk_live_xpo15faMQsO3EETkaR8jqQ8H'
export const TEST_STRIPE_KEY = 'pk_test_lQYC49aP6fT12LuZv8ejgghF'
const getStripeKey = (env) => {
  switch(env) {
    case 'production':
      return LIVE_STRIPE_KEY
    default:
    case 'development':
      return TEST_STRIPE_KEY
  }
}

export const STRIPE_KEY = getStripeKey(process.env.NODE_ENV)
export const API_ENDPOINT = getEndpoint(process.env.NODE_ENV)

export const createOrder = (order) => {
  return fetch(`${API_ENDPOINT}/order`, {
    method: 'post',
    body: JSON.stringify(order),
  })
}

export const getOrder = (id) => {
  return fetch(`${API_ENDPOINT}/order/${id}`)
}