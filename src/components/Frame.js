import styled from 'styled-components'
import { darken } from 'polished'

const generateBoxShadowCSS = (thickness, borderColor1 = '#ccc', borderColor2 = '#aaa') => {
  let css = ''
  let c1 = borderColor1
  let c2 = borderColor2
  for (let i = 1 ; i < thickness / 2; i++) {
    css += `
      inset 0 ${i}px 0 ${c1}, 
      inset ${i}px 0 0 ${c2},
      inset 0 -${i}px 0 ${c1},
      inset -${i}px 0 0 ${c2},
    `
    c1 = darken(0.01, c1)
    c2 = darken(0.01, c2)
  }
  return css
}

const Frame = styled.div`
  height: ${props => props.height + props.thickness - 1}px;
  width: ${props => props.width + props.thickness - 1}px;
  position: absolute;
  top: ${props => -(props.thickness/2 - 2)}px;
  left: ${props => -(props.thickness/2 - 2)}px;
  border: 1px solid;
  border-color: #bbb #999;
  box-shadow: 
    0 2px 5px hsla(0,0%,0%,.4),
    ${props => generateBoxShadowCSS(props.thickness, props.borderColor1, props.borderColor2)}
    inset 0 0 10px 10px hsla(0,0%,0%,.5);
`

export default Frame