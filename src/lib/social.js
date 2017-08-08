const FB_COUNT = 'http://graph.facebook.com/?id='
const FB_SHARE_KEY = 'did_share_fb'

export const didShareOnFB = (url) => {
  return fetch(`${FB_COUNT}${url}`).then(res => res.json())
    .then(({share}) => {
      return share.share_count > 0
    })
}

export const persistCoupon = () => {
  window.localStorage && window.localStorage.setItem(FB_SHARE_KEY, true)
}

export const hasPersistedCoupon = () => {
  return window.localStorage && window.localStorage.getItem(FB_SHARE_KEY) === 'true'
}