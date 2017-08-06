import React, { Component } from 'react';
import styled from 'styled-components';

import Flex from './Flex';
import Dropzone from './Dropzone';
import TextAreaControl from './TextAreaControl';
import CheckBoxOption from './CheckBoxOption';
import Button from './Button';
import Select, { SelectLabel, defaultOptionsForKey }  from './Select';
import { modularScale } from 'polished';


const CheckBoxWrapper = styled.div`
  margin: 10px 0px 15px;
`

const ButtonMessage = styled.div`
  font-size: ${modularScale(-1)};
  font-style: italic;
  margin-top: 8px;
`

class ImageToTextControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      useTextArea: false,
      invertImage: false,
      text: '',
      charsPerRow: 100,
      buttonMessage: null,
    }
  }

  onShowMePress = (disabled) => {
    if (disabled) {
      this.setState({ buttonMessage: 'Add an image first!' })
    }
  }

  render() {
    const { 
      file, 
      text,
      useTextArea, 
      charsPerRow, 
      invertImage,
      buttonMessage,
    } = this.state;
    const buttonDisabled = !file
    return (
      <Flex justifyContent='space-around' wrap={true}>
        <Dropzone 
          preview={(file || {}).preview}
          onDrop={(file) => this.setState({ file, buttonMessage: null })}
        />
        <TextAreaControl 
          disabled={!useTextArea}
          onCheckToggle={(state) => this.setState({ useTextArea: !state })}
          onChange={(text) => this.setState({ text })}
        />
        <div>
          <div>
            <SelectLabel> Characters / Row</SelectLabel>
            <Select
              name='characters-per-row'
              value={charsPerRow}
              clearable={false}
              options={defaultOptionsForKey([100,200,300])}
              onChange={(charsPerRow) => this.setState({ charsPerRow })}
            />
          </div>
          <CheckBoxWrapper>
            <CheckBoxOption
              label='Invert image colors'
              checked={invertImage}
              onCheckToggle={(state) => this.setState({ invertImage: state })}
            />
          </CheckBoxWrapper>
          <div> 
            <Button 
              disabled={buttonDisabled} 
              onClick={() => this.onShowMePress(buttonDisabled)}
            >Show me</Button>
            {buttonMessage && <ButtonMessage> {buttonMessage} </ButtonMessage>}
          </div>
        </div>
      </Flex>
    )
  }
}

export default ImageToTextControl;