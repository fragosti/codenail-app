const getEndpoint = (env) => {
  switch(process.env.NODE_ENV) {
    case 'staging':
      return ''
    case 'production':
      return ''
    default:
    case 'development':
      return 'http://localhost:8000/dev'
  }
}
export const API_ENDPOINT = getEndpoint(process.env.NODE_ENV)

export const createOrder = (order) => {
  return fetch(`${API_ENDPOINT}/order`, {
    method: 'post',
    body: JSON.stringify(order),
  })
}