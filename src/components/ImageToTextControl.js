import React, { Component } from 'react';

import Flex from './Flex';
import Dropzone from './Dropzone';

class ImageToTextControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
    }
  }

  render() {
    const { file } = this.state;
    return (
      <Flex>
        <Dropzone 
          preview={(file || {}).preview}
          onDrop={(file) => this.setState({ file })}
        />
      </Flex>
    )
  }
}

export default ImageToTextControl;