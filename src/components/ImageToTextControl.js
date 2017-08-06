import React, { Component } from 'react';

import Flex from './Flex';
import Dropzone from './Dropzone';
import TextAreaControl from './TextAreaControl';

class ImageToTextControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      useTextArea: false,
      text: '',
    }
  }

  render() {
    const { file, useTextArea } = this.state;
    return (
      <Flex justifyContent='space-around'>
        <Dropzone 
          preview={(file || {}).preview}
          onDrop={(file) => this.setState({ file })}
        />
        <TextAreaControl 
          disabled={!useTextArea}
          onCheckToggle={(state) => this.setState({ useTextArea: !state })}
          onChange={(text) => this.setState({ text })}
        />
      </Flex>
    )
  }
}

export default ImageToTextControl;