import React, { Component } from 'react';
import styled from 'styled-components';

import Flex from './Flex';
import Dropzone from './Dropzone';
import TextAreaControl from './TextAreaControl';
import CheckBoxOption from './CheckBoxOption';
import Button from './Button';
import { fileToText, isWhiteOrTransparent } from 'img-using-text';
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

const charForPixelGivenText = (text, invertImage) => {
  return (pixel, pixelIndex) => {
    const { r, g, b, a } = pixel;
    const isWhite = isWhiteOrTransparent(r, g, b, a)
    if (invertImage ? isWhite : !isWhite) {
      return text[pixelIndex % text.length];
    } else {
      return ' ';
    }
  }
}

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
      return
    } 
    const { file, invertImage, charsPerRow, useTextArea } = this.state
    const text = (useTextArea ? 
      this.state.text : this.props.editorText.replace(/\s+/g,' ')) || 'x'

    fileToText(file, charsPerRow, 0.5, {
      charForPixel: charForPixelGivenText(text, invertImage),
      async: false,
    })
    .then((text) => this.props.onNewText(text, charsPerRow))
    .catch(console.log)
  }

  render() {
    const { 
      file,
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
              options={defaultOptionsForKey([100,150,200,250,300])}
              onChange={({value}) => this.setState({ charsPerRow: value })}
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