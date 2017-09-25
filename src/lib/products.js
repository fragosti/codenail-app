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
    effectiveColor: 'rgb(238, 238, 238)',
  },
  'red': {
    src: SRC1,
    color: 'rgb(185, 1, 22)',
    effectiveColor: 'rgb(176, 33, 50)',
  },
  'black': {
    src: SRC1,
    color: 'rgb(10, 10, 10)',
    effectiveColor: 'rgb(40, 40, 40)',
  },
  'pink': {
    src: SRC2,
    color: 'rgb(255, 175, 206)',
    effectiveColor: 'rgb(238, 169, 196)',
  },
  'yellow': {
    src: SRC2,
    color: 'rgb(255, 230, 85)',
    effectiveColor: 'rgb(239, 217, 90)',
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
    effectiveColor: 'rgb(73, 77, 81)'
  },
  'berry': {
    src: SRC2,
    color: 'rgb(235, 41, 137)',
    effectiveColor: 'rgb(220, 51, 135)',
  }, 
  'aqua': {
    src: SRC1,
    color: 'rgb(0, 141, 181)',
    effectiveColor: 'rgb(34, 143, 174)',
  }, 
  'kelly': {
    src: SRC1,
    color: 'rgb(0, 107, 73)',
    effectiveColor: 'rgb(32, 116, 89)',
  },
  'navy': {
    src: SRC1,
    color: 'rgb(55, 56, 74)',
    effectiveColor: 'rgb(76, 77, 91)',
  }
}

export const colorForName = (colorName) => {
  const { pickerColor, color } = shirts[colorName]
  return pickerColor || color
}

export const shirtColors = Object.keys(shirts).map((colorName) => {
  return {
    colorName,
    color: colorForName(colorName) 
  }
})

