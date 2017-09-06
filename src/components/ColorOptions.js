import React from 'react';

import Button from './Button';

const OptionButton = Button.extend`
  width: 10px;
  height: 10px;
`

const ColorOption = ({ name, selected, color, onSelect }) => (
  <OptionButton color={color} onClick={() => onSelect(name)}/>
)

const ColorOptions = ({ colors, selectedColor, onSelect, className }) => (
  <div className={className}>
    {colors.map(({ color, colorName }) => (
      <ColorOption
        key={colorName}
        selected={colorName === selectedColor}
        color={color}
        name={colorName}
        onSelect={onSelect}
      />
    ))}
  </div>
) 


export default ColorOptions