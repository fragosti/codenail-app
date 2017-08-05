import React from 'react';

import { IconButton } from './Button';

const ArrowControl = ({ onUp, onDown, onLeft, onRight }) => (
  <div>
    <IconButton onClick={onLeft} name='left'/>
    <IconButton onClick={onUp} name='up'/>
    <IconButton onClick={onDown} name='down'/>
    <IconButton onClick={onRight} name='right'/>
  </div>
)

export default ArrowControl