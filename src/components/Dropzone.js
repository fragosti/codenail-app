import React, { Component } from 'react';
import Zone from 'react-dropzone';
import styled, { css } from 'styled-components';

import Icon from './Icon';
import { isMobile } from '../lib/utils';
import { colors } from '../style/utils';
import { SelectLabel } from './Select';

const mobileCSS = css`
  input {
    display: block !important;
    width: 100%;
    margin: 5px;
  }
  span {
    display: none;
  }
`

const StyledZone = styled(Zone)`
  width: 100px;
  height: 100px;
  border: 2px dashed ${colors.gray};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  overflow: hidden;
  &:hover {
    border-color: black;
  }
  ${isMobile.any() && mobileCSS}
`
const Preview = styled.img`
  width: 100px;
`

class Dropzone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null
    }
  }

  render() {
    const { message } = this.state
    const { onDrop, preview } = this.props
    return (
      <div>
        <SelectLabel>Upload your image</SelectLabel>
        <StyledZone
          accept='image/*'
          multiple={false}
          onDropAccepted={(files) => onDrop(files[0])}
          onDropRejected={() => this.setState({ message: 'There was an error'})}
        > 
          { preview ? <Preview src={preview} alt='Upload preview'/> : <Icon name='upload' size={40}/> }
        </StyledZone>
        {message && <i>{message}</i>}
      </div>
    )
  }
}

export default Dropzone