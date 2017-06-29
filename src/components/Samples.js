import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Overlay from './Overlay';
import { PosterBack } from './Page';
import { CTA } from './Button';

const Image = styled.img`
  width: ${props => props.width || 300}px;
`

const SampleWrap = PosterBack.extend`
  cursor: pointer;
  position: relative;
`
const CTAWrap = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  text-align: center;
`
const SampleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CTALink = CTA.withComponent(Link)

const Samples = ({ samples }) => (
  <SampleContainer>
    {Object.keys(samples).map((id) => <Sample key={id} id={id}/>)}
  </SampleContainer>
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
        <Image src={url}/>
        <CTAWrap>
          <CTALink to={`/create?sampleId=${id}`}> See in Editor </CTALink>
        </CTAWrap>
      </SampleWrap>
    )
  }
}

export default Samples