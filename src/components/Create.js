import React, { Component } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { modularScale } from 'polished';

import Editor from './Editor';
import { controls } from './EditorControl';
import { CTA } from './Button';
import Overlay from './Overlay';
import Spinner from './Spinner';
import Frame from './Frame';
import { Container } from './Page';
import { colors, isPhone } from '../style/utils';
import { aspectRatioForSize } from '../lib/utils';
import { priceForSize } from '../lib/price';
import samples from '../lib/samples';
import { getQueryParams, removeQueryParams } from '../lib/utils';
import { createOrder, STRIPE_KEY, TEST_STRIPE_KEY } from '../lib/api';

import logo from '../img/logo.png';

const LayoutContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px 15px;
  height: 100%;
`

const ControlSection = styled.div`
  width: 100%;
  h3 {
    font-size: ${modularScale(1)};
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 5px 0px;
  }
`

const ButtonPanel = styled.div`
  margin-top: 50px;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px 0px;
  justify-content: flex-start;
  max-width: 700px;
  flex-wrap: wrap;
`

const EditorWrapper = styled.div`
  padding: 1px;
  border-radius: 3px;
  border: 2px solid #f5f5f5;
  position: relative;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
  margin: ${props => props.framed ? 35 : 0}px 0px;
`

const OverlayMessage = styled.div`
  margin-top: 20px;
`

const Action = styled.u`
  cursor: pointer;
`

const EDITOR_WIDTH = isPhone() ? 350 : 500;

class Create extends Component {
  constructor(props) {
    super(props)
    const { sampleId } = getQueryParams(props.location.search)
    const savedState = JSON.parse(window.localStorage ? window.localStorage.getItem('createState') : null)
    this.state = Object.assign({
      errorMessage: null,
      language: 'javascript',
      mode: 'monokai',
      showLineNumbers: true,
      wrapEnabled: false,
      value: '// Paste your code here!',
      fontSize: isPhone() ? 8 : 12,
      size: '12x16',
      framed: false,
      horPadding: 0,
      verPadding: 0,
      paddingColor: 'none',
    }, (sampleId ? samples[sampleId] : savedState) || {})
  }

  saveState = () => {
    const { errorMessage, ...editorState} = this.state
    const { history, location } = this.props
    const { sampleId } = getQueryParams(location.search)
    window.localStorage && window.localStorage.setItem('createState', JSON.stringify(editorState))
    if (sampleId) {
      history.push(`/create${removeQueryParams(location.search, ['sampleId'])}`)
    }
  }

  onSettingsChange = (key, value) => {
    this.setState({
      [key]: value,
    }, this.saveState)
  }

  onValueChange = (value) => {
    this.setState({ value }, this.saveState)
  }

  render() {
    const { location, history, isLoading, startLoading, stopLoading } = this.props
    const isTest = location.search.includes('test')
    const { language, fontSize, size, framed, mode, showLineNumbers, wrapEnabled, value, horPadding, verPadding, paddingColor, errorMessage } = this.state
    const { coupon } = getQueryParams(location.search)
    const price = priceForSize(size, framed, coupon)
    const description = framed ? `Framed ${size} poster` : `${size} poster`
    const width = EDITOR_WIDTH
    const height = aspectRatioForSize(size)*EDITOR_WIDTH 
    return (
      <Container>
        {isLoading && (
          <Overlay> 
            <div>          
              <Spinner scale={6}/>
            </div>
            <OverlayMessage> Processing your order... </OverlayMessage>
          </Overlay>
          )
        }
        {errorMessage && <p><i> {errorMessage} </i></p>}
        <LayoutContainer>
          <SectionContainer>
            <EditorWrapper framed={framed}> 
              {framed && ( 
                <Frame 
                  width={width} 
                  height={height} 
                  thickness={isPhone() ? 35 : 70}
                  borderColor1='#767676'
                  borderColor2='#666666'
                />
              )}
              <Editor 
                language={language}
                theme={mode}
                value={value}
                fontSize={fontSize}
                onChange={this.onValueChange}
                showLineNumbers={showLineNumbers}
                wrapEnabled={wrapEnabled}
                width={width}
                height={height}
                horPadding={horPadding}
                verPadding={verPadding}
                paddingColor={paddingColor}
              />
            </EditorWrapper>
            <i>Want to remove new lines and extra space? <Action onClick={() => this.setState({ value: this.state.value.replace(/\s+/g,' ') })}>Press Here.</Action></i>
          </SectionContainer>
          <SectionContainer>
            <ControlSection>
              <h3> Shape it like a logo? </h3>
              <Controls>
                <div> 1</div>
                <div> 2</div>
                <div> 3</div>
              </Controls>
            </ControlSection>
            <ControlSection>
              <h3> Style</h3>
              <Controls>
                {controls({
                  language,
                  mode,
                  fontSize,
                  showLineNumbers,
                  wrapEnabled,
                  horPadding,
                  verPadding,
                  paddingColor,
                }, this.onSettingsChange)}
              </Controls>
            </ControlSection>
            <ControlSection>
              <h3> Dimensions and Frame</h3>
              <Controls>
                {controls({
                  size, 
                  framed,
                }, this.onSettingsChange)}
              </Controls>
            </ControlSection>
            <ButtonPanel> 
              <StripeCheckout 
                token={(token, addresses) => {
                  startLoading()
                  createOrder({
                    token,
                    addresses,
                    price: price*100,
                    description,
                    isTest,
                    options: {
                      language,
                      mode,
                      value,
                      fontSize,
                      showLineNumbers,
                      wrapEnabled,
                      width,
                      height,
                      horPadding,
                      verPadding,
                      paddingColor,
                      size,
                      framed,
                    }
                  })
                  .then(res => res.json())
                  .then(({ id }) => {
                    stopLoading()
                    history.push(`/thankyou/${id}`)
                  })
                  .catch(() => {
                    stopLoading()
                    this.setState({ errorMessage: 'Sorry! Something went wrong please try again later.'})
                  })
                }}
                name="Codenail.com"
                image={logo}
                description={description}
                ComponentClass="span"
                amount={price*100}
                shippingAddress={true}
                billingAddress={true}
                stripeKey={isTest ? TEST_STRIPE_KEY : STRIPE_KEY}
                opened={() => {
                  if (location.search) {
                    history.push(`/create${location.search}&overlay=checkout`)
                  } else {
                    history.push(`/create?overlay=checkout`)
                  }
                }}
                closed={() => history.goBack()}
              >
                <CTA color={colors.green}>{`Order for $${price}`}</CTA>
              </StripeCheckout>
            </ButtonPanel>
          </SectionContainer>
        </LayoutContainer>
      </Container>
    )
  }
}

export default Create