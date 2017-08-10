const FB_COUNT = 'http://graph.facebook.com/?id='

export const didShareOnFB = (url) => {
  return fetch(`${FB_COUNT}${url}`).then(res => res.json())
    .then(({share}) => {
      return share.share_count > 0
    })
}