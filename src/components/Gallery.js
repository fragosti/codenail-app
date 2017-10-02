import React, { Component } from 'react';
import Lightbox from 'react-images';
import styled from 'styled-components';

import { sizes, media } from '../style/utils';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Image = styled.img`
  margin: 15px;
  cursor: pointer;
  border-radius: 2px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
  width: 450px;
  ${media.phone`
    width: 350px;
  `}
`

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLightBoxOpen: false,
      imgIndex: 0,
    }
  }

  openImage = (index) => {
    this.setState({
      isLightBoxOpen: true,
      imgIndex: index,
    })
  }

  goToNextImage = () => {
    this.setState({
      imgIndex: this.state.imgIndex + 1,
    })
  }

  goToPrevImage = () => {
    this.setState({
      imgIndex: this.state.imgIndex - 1,
    })
  }

  render() {
    const { isLightBoxOpen, imgIndex } = this.state
    const { images } = this.props
    return (
      <Container>
        {images.map((imgInfo, i) => (
          <Image 
            onClick={() => this.openImage(i)}
            key={i} 
            src={imgInfo.src} 
            alt='Gallery Image'/>
          )
        )}    
        <Lightbox 
          images={images}
          isOpen={isLightBoxOpen}
          onClickPrev={this.goToPrevImage}
          onClickNext={this.goToNextImage}
          currentImage={imgIndex}
          onClose={() => this.setState({ isLightBoxOpen: false })}
          backdropClosesModal={true}
          width={sizes.giant}
        />
      </Container>
    )
  }
}


export default Gallery