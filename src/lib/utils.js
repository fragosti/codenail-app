export const aspectRatioForSize = (size) => { // 12x16 for example
  return size.split('x').map(x => parseInt(x, 10)).reduce((x, y) => y / x)
}

export const getQueryParams = (queryString) => {
  return queryString.slice(1).split('&').map(s => s.split('=')).reduce((acc, value) => {
    acc[value[0]] = value[1]
    return acc
  }, {})
}

export const removeQueryParams = (search, paramList) => {
  let currentParams = getQueryParams(search)
  paramList.forEach((key) => {
    delete currentParams[key] 
  })
  return addQueryParams(null, currentParams)
}

export const addQueryParams = (search, paramObject) => {
  const stringParams = Object.keys(paramObject).reduce((acc, key, i) => {
    if (paramObject[key]) {
      if (i !== 0) {
        acc += '&'
      }
      acc += `${key}=${paramObject[key]}`
    }
    return acc
  }, '')
  if (search) {
    return `${search}&${stringParams}`
  }
  if (stringParams) {
    return `?${stringParams}`
  }
  return ''
}

export const closeModal = (history, location) => {
  const { search, pathname } = location
  history.push(`${pathname}${removeQueryParams(search, ['modal', 'data'])}`)
}

export const openModal = (history, location, name, data) => {
  const { search, pathname } = location
  const bareSearch = removeQueryParams(search, ['modal', 'data'])
  history.push(`${pathname}${addQueryParams(bareSearch, {
    modal: name,
    data: data,
  })}`)
}

export const range = (n) => {
  return Array.apply(null, {length: n}).map(function(value, index){
    return index + 1;
  });
};

export const concatMap = (arr, fn) => {
  return arr.concat(arr.map(fn))
}

export const flipAround = (str, char) => {
  const sStr = str.split(char)
  return `${sStr[1]}${char}${sStr[0]}`
}

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

export const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};