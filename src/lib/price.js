// Printful prices ($)

export const printPrices = {
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

export const framedPrintPrices = {
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

export const costForSize = (size, framed) => framed ? framedPrintPrices[size] : printPrices[size];

export const priceForSize = (size, framed, couponCode) => {
  const price = Math.pow((costForSize(size, framed)*10), .75)
  switch (couponCode) {
    case '40off':
      return Math.ceil((6/10)*price)
    default:
      return Math.ceil(price)
  }
}