import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { modularScale } from 'polished';

import { isPhone } from '../style/utils';
import Overlay from './Overlay';
import Image from './Image';
import { Tab, Tabs, TabList, TabPanel } from './Tabs';
import { PosterBack, DisplayContainer as SamplesContainer } from './Page';
import { CTA } from './Button';


const SampleWrap = PosterBack.extend`
  cursor: pointer;
  position: relative;
  padding: 1em;
  margin: 1em;
`
const CTAWrap = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  text-align: center;
`

const TabTitleText = styled.span`
  font-size: ${modularScale(1)}
`

const CTALink = CTA.withComponent(Link)

const productTypeForId = {
  1: 'poster',
  2: 'shirt',
  3: 'shirt',
  4: 'poster',
  5: 'poster',
  6: 'shirt',
};

const Samples = ({ samples }) => (
  <SamplesContainer>
    {Object.keys(samples).map((id) => <Sample key={id} id={id} productType={productTypeForId[id]}/>)}
  </SamplesContainer>
)


class Sample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      productType: props.productType
    }
  }

  close = (e) => {
    e.stopPropagation(0)
    this.setState({ isOpen:false })
  }
  open = (e) => {
    e.stopPropagation()
    this.setState({ isOpen: true })
  }

  urlForProductType = (id, productType) => {
    switch(productType) {
      case 'shirt':
        return this.urlForShirt(id)
      case 'poster':
        return this.urlForPoster(id)
      default:
        throw new Error(`Using wrong productType: ${productType}`)
    }
  };

  urlForPoster = (id) => {
    return `https://s3-us-west-2.amazonaws.com/codenail-order-samples/${id}p.png`
  };

  urlForShirt = (id) => {
    return `https://s3-us-west-2.amazonaws.com/codenail-order-samples/${id}s.png`
  };

  linkUrl = () => {
    return `/create?sampleId=${this.props.id}&productType=${this.state.productType}`
  }

  render() {
    const { isOpen, productType } = this.state
    const { id } = this.props
    const currentUrl = this.urlForProductType(id, productType)
    return (
      <SampleWrap>
        {isOpen && 
        <Overlay onClick={this.close}>
          <PosterBack>
            <Image width={isPhone() ? 400 : 700} src={currentUrl}/>
          </PosterBack>
        </Overlay>
        }
        <Tabs 
          forceRenderTabPanel={true}
          selectedIndex={productType === 'shirt' ? 1 : 0}
          onSelect={(index) => {
            const goingTo = index ? 'shirt' : 'poster';
            this.setState({ productType: goingTo })
          }}
        >
          <TabList>
            <Tab><TabTitleText>Poster</TabTitleText></Tab>
            <Tab><TabTitleText>Shirt</TabTitleText></Tab>
          </TabList>
          <TabPanel>
            <Image 
              onClick={this.open} 
              src={this.urlForPoster(id)} 
              alt='A code poster sample.'
              display={productType === 'poster' ? 'block' : 'none'}
            />
          </TabPanel>
          <TabPanel>
            <Image 
              onClick={this.open} 
              src={this.urlForShirt(id)} 
              alt='A code shirt sample.'
              display={productType === 'shirt' ? 'block' : 'none'}
            />
          </TabPanel>
        </Tabs>
        <CTAWrap>
          <CTALink to={this.linkUrl()}> See in Editor </CTALink>
        </CTAWrap>
      </SampleWrap>
    )
  }
}

export default Samples