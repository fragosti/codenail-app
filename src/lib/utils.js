export const aspectRatioForSize = (size) => { // 12x16 for example
  return size.split('x').map(x => parseInt(x, 10)).reduce((x, y) => y / x)
}