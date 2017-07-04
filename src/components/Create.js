import React, { Component } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';

import Editor from './Editor';
import EditorControl from './EditorControl';
import Button from './Button';
import Overlay from './Overlay';
import Spinner from './Spinner';
import Frame from './Frame';
import { Container, Description } from './Page';
import { colors } from '../style/utils';
import { aspectRatioForSize } from '../lib/utils';
import { priceForSize } from '../lib/price';
import samples from '../lib/samples';
import { getQueryParams } from '../lib/utils';
import { createOrder, STRIPE_KEY, TEST_STRIPE_KEY } from '../lib/api';

import logo from '../img/logo.png';


const EditorContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const EditorWrapper = styled.div`
  padding: 1px;
  border-radius: 3px;
  border: 2px solid #f5f5f5;
  position: relative;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
  margin-top: ${props => props.framed ? 35 : 0}px;
`

const PaddedControl = styled(EditorControl)`
  padding: 20px 0px;
`

const OverlayMessage = styled.div`
  margin-top: 20px;
`

const EDITOR_WIDTH = 700;

class Create extends Component {
  constructor(props) {
    super(props)
    const { sampleId } = getQueryParams(props.location.search)
    this.state = Object.assign({
      errorMessage: null,
      language: 'javascript',
      mode: 'monokai',
      showLineNumbers: true,
      showGutter: true,
      value: '// Paste your code here!',
      fontSize: 12,
      size: '12x16',
      framed: false,
      horPadding: 0,
      verPadding: 0,
      paddingColor: 'none',
    }, samples[sampleId] || {})
  }

  onSettingsChange = (key, value) => {
    this.setState({
      [key]: value,
    })
  }

  onValueChange = (value) => {
    this.setState({ value })
  }

  render() {
    const { location, history, isLoading, startLoading, stopLoading } = this.props
    const isTest = location.search.includes('test')
    const { language, fontSize, size, framed, mode, showLineNumbers, showGutter, value, horPadding, verPadding, paddingColor, errorMessage } = this.state
    const { coupon } = getQueryParams(location.search)
    const price = priceForSize(size, framed, coupon)
    const description = framed ? `Framed ${size} poster` : `${size} poster`
    const width = EDITOR_WIDTH
    const height =  aspectRatioForSize(size)*EDITOR_WIDTH 
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
        <Description> 
          {errorMessage && <p><i> {errorMessage} </i></p>}
          <h1> Welcome to the editor! </h1> 
          <p> 
            Add your code, specify the language, theme, font size and more.
            You'll see the print preview live update as you go. 
            <strong> Price will vary with print size</strong> and whether you would like it <strong>framed</strong> in black.
            <strong> Shipping is free and takes 3-5 business days</strong> after fulfillment. 
            More questions? Visit our <Link to='/faq'><strong>FAQ</strong></Link> page. 
            Press order once you're ready! 
          </p>
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
                  showGutter,
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
          >
            <Button color={colors.green}>{`Order for $${price}`}</Button>
          </StripeCheckout>
        </Description>
        <EditorContainer>
          <PaddedControl 
            onChange={this.onSettingsChange}
            editorProps={{
              language,
              mode,
              showLineNumbers,
              showGutter,
              fontSize,
              size,
              framed,
              horPadding,
              verPadding,
              paddingColor,
            }}
          />
          <EditorWrapper framed={framed}> 
            {framed && ( 
              <Frame 
                width={width} 
                height={height} 
                thickness={70}
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
              showGutter={showGutter}
              width={width}
              height={height}
              horPadding={horPadding}
              verPadding={verPadding}
              paddingColor={paddingColor}
            />
          </EditorWrapper>
        </EditorContainer>
      </Container>
    )
  }
}

export default Create