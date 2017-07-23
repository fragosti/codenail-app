import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Overlay from './Overlay';
import Image from './Image';
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

const CTALink = CTA.withComponent(Link)

const Samples = ({ samples }) => (
  <SamplesContainer>
    {Object.keys(samples).map((id) => <Sample key={id} id={id}/>)}
  </SamplesContainer>
)

class Sample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
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

  render() {
    const { isOpen } = this.state
    const { id } = this.props
    const url = `https://s3-us-west-2.amazonaws.com/codenail-order-samples/${id}.png`
    return (
      <SampleWrap onClick={this.open}>
        {isOpen && 
        <Overlay onClick={this.close}>
          <PosterBack>
            <Image width={500} src={url}/>
          </PosterBack>
        </Overlay>
        }
        <Image src={url} alt='A code poster sample.'/>
        <CTAWrap>
          <CTALink to={`/create?sampleId=${id}`}> See in Editor </CTALink>
        </CTAWrap>
      </SampleWrap>
    )
  }
}

export default Samples