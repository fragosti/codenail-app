export const TEST_STRIPE_KEY = 'pk_test_lQYC49aP6fT12LuZv8ejgghF'
export const STRIPE_KEY = process.env.REACT_APP_STRIPE_KEY
export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

const get = (path, id) => {
  return fetch(`${API_ENDPOINT}/${path}/${id}`)
}

const post = (path, data) => {
  return fetch(`${API_ENDPOINT}/${path}`, {
    method: 'post',
    body: JSON.stringify(data),
  })
}

export const createOrder = (order) => {
  return post('order', order)
}

export const getOrder = (id) => {
  return get('order', id)
}

export const createShare = (share) => {
  return post('share', share)
}

export const getShare = (id) => {
  return get('share', id)
}

export const createPreview = (options, isPhone) => {
  return post('preview', { options, isPhone })
}