export const aspectRatioForSize = (size) => { // 12x16 for example
  return size.split('x').map(x => parseInt(x, 10)).reduce((x, y) => y / x)
}

export const getQueryParams = (queryString) => {
  return queryString.slice(1).split('&').map(s => s.split('=')).reduce((acc, value) => {
    acc[value[0]] = value[1]
    return acc
  }, {})
}

export const concatMap = (arr, fn) => {
  return arr.concat(arr.map(fn))
}

export const flipAround = (str, char) => {
  const sStr = str.split(char)
  return `${sStr[1]}${char}${sStr[0]}`
} 

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))