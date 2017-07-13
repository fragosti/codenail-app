export const TEST_STRIPE_KEY = 'pk_test_lQYC49aP6fT12LuZv8ejgghF'
export const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const createOrder = (order) => {
  return fetch(`${API_ENDPOINT}/order`, {
    method: 'post',
    body: JSON.stringify(order),
  })
}

export const getOrder = (id) => {
  return fetch(`${API_ENDPOINT}/order/${id}`)
}