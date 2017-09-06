const shirtPng = (name) => {
  return `https://s3-us-west-2.amazonaws.com/codenail-shirts/${name}.png`
}
const SRC1 = shirtPng('front-shadows')
const SRC2 = shirtPng('front-shadows2')

const deepHeatherPattern = shirtPng('deep-heather-pattern')
const athleticHeatherPattern = shirtPng('athletic-heather-pattern')
const heatherNavyPattern = shirtPng('heather-navy-pattern')

export const shirts = {
  'white': {
    src: SRC2,
    color: 'rgb(255, 255, 255)',
  },
  'red': {
    src: SRC1,
    color: 'rgb(185, 1, 22)',
  },
  'black': {
    src: SRC1,
    color: 'rgb(10, 10, 10)',
  },
  'pink': {
    src: SRC2,
    color: 'rgb(255, 175, 206)',
  },
  'yellow': {
    src: SRC2,
    color: 'rgb(255, 230, 85)',
  },
  'deep-heather': {
    src: SRC1,
    backgroundImage: deepHeatherPattern,
    pickerColor: 'rgb(155, 154, 159)',
  },
  'athletic-heather': {
    src: SRC1,
    backgroundImage: athleticHeatherPattern,
    pickerColor: 'rgb(168, 171, 178)',
  },
  'heather-navy': {
    src: SRC1,
    backgroundImage: heatherNavyPattern,
    pickerColor: 'rgb(105, 106, 136)'
  },
  'asphalt': {
    src: SRC2,
    color: 'rgb(65, 70, 74)',
  },
  'berry': {
    src: SRC2,
    color: 'rgb(65, 70, 74)',
  }, 
  'aqua': {
    src: SRC1,
    color: 'rgb(0, 141, 181)',
  }, 
  'kelly': {
    src: SRC1,
    color: 'rgb(0, 107, 73)',
  }
}

export const shirtColors = Object.keys(shirts).map((colorName) => {
  const { pickerColor, color } = shirts[colorName]
  return {
    colorName,
    color: pickerColor || color 
  }
})

