// Printful prices ($)
import { flipAround } from './utils'

export const printCosts = {
  '8x10': 9,
  '10x10': 10,
  '12x12': 11,
  '12x16': 13,
  '12x18': 13.25,
  '14x14': 12,
  '16x16': 13.50,
  '16x20': 14,
  '18x18': 15,
  '18x24': 16,
  '24x36': 22,
};

export const framedPrintCosts = {
  '8x10': 23,
  '10x10': 25,
  '12x12': 29,
  '12x16': 35.50,
  '12x18': 36,
  '14x14': 34,
  '16x16': 38,
  '16x20': 48,
  '18x18': 46,
  '18x24': 54,
  '24x36': 89,
};

export const inToCm = (inSize) => inSize.split('x').map(size => (parseInt(size, 10) * 2.54).toFixed(1)).join('x')

export const costForSize = (size, framed) => {
  return framed ? 
    (framedPrintCosts[size] || framedPrintCosts[flipAround(size, 'x')]) : 
    (printCosts[size] || printCosts[flipAround(size, 'x')]);
}

export const priceForSize = (size, framed, couponCode) => {
  const price = costForSize(size, framed)*1.50 + 10
  switch (couponCode) {
    case '10off':
      return Math.round((9/10)*price)
    default:
      return Math.round(price)
  }
}

export const priceForDownload = (couponCode) => {
  const price = 5
  switch (couponCode) {
    case '10off':
      return Math.round((9/10)*price)
    default:
      return Math.round(price)
  }
}

export const printPrices = Object.keys(printCosts).reduce((acc, size) => {
  acc[size] = priceForSize(size, false)
  return acc
}, {})

export const framedPrintPrices = Object.keys(framedPrintCosts).reduce((acc, size) => {
  acc[size] = priceForSize(size, true)
  return acc
}, {})
