import React, { Component } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';

import Editor from './Editor';
import EditorControl from './EditorControl';
import Button from './Button';
import Overlay from './Overlay';
import Spinner from './Spinner';
import { Container, Description } from './Page';
import { lineHeight, colors } from '../style/utils';
import { aspectRatioForSize } from '../lib/utils';
import { priceForSize } from '../lib/price';
import { createOrder, STRIPE_KEY, TEST_STRIPE_KEY } from '../lib/api';


const EditorContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const EditorWrapper = styled.div`
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
`

const PaddedControl = styled(EditorControl)`
  padding: 20px 0px;
`

const EDITOR_WIDTH = 700;

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null,
      language: 'javascript',
      mode: 'monokai',
      showLineNumbers: true,
      showGutter: true,
      value: '// Paste your code here!',
      fontSize: 12,
      size: '12x16',
      framed: false,
    }
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
    const { language, fontSize, size, framed, mode, showLineNumbers, showGutter, value, errorMessage } = this.state
    const price = priceForSize(size, framed)*3 + 10
    const description = framed ? `Framed ${size} poster` : `${size} poster`
    const width = EDITOR_WIDTH
    const height =  aspectRatioForSize(size)*EDITOR_WIDTH
    return (
      <Container>
        {isLoading && (
          <Overlay> 
            <Spinner scale={6}/>
          </Overlay>
          )
        }
        <Description> 
          {errorMessage && <p><i> {errorMessage} </i></p>}
          <h1> Welcome to the editor! </h1> 
          <p> 
            Copy & paste your code, specify the language, theme, font size and more.
            You'll see the print preview live update as you go. 
            Price will vary with print size and whether you would like it framed in black.
            Press order once you're ready! 
          </p>
          <StripeCheckout 
            token={(token) => {
              startLoading()
              createOrder({
                token,
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
            description={description}
            ComponentClass="p"
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
            }}
          />
          <EditorWrapper> 
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
            />
          </EditorWrapper>
        </EditorContainer>
      </Container>
    )
  }
}

export default Create