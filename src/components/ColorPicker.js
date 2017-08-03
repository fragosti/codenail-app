import React, { Component } from 'react';
import BlockPicker from 'react-color/lib/components/block/Block';
import styled from 'styled-components';

import { zIndex } from '../style/utils';
import Button from './Button';
import { SelectLabel, OptionContainer } from './Select';
import withOnClickOutside from '../HOCs/withOnClickOutside';

const AwareButton = withOnClickOutside(Button.extend`
  height: 36px;
  width: 100px;
`)

const PickerWrapper = styled.div`
  position: absolute;
  z-index: ${zIndex.aboveEditor};
`

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    const { color, label, children, onChange } = this.props;
    const { isOpen } = this.state;
    return (
      <OptionContainer>
        {label && <SelectLabel>{label}</SelectLabel>}
        <AwareButton 
          showing={isOpen}
          color={color} 
          onClick={()=> this.setState({ isOpen: true })}
          onClickOutside={()=> this.setState({ isOpen: false })}
        >
        {children}
        </AwareButton>
        {isOpen && (
          <PickerWrapper>
            <BlockPicker color={color} onChangeComplete={onChange}/>
          </PickerWrapper>
        )}
      </OptionContainer>
    )
  }
}

export default ColorPicker;
