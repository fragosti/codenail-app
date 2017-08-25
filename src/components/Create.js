import React, { Component } from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

import Modal from './Modal';
import Editor from './Editor';
import { controls } from './EditorControl';
import ColorPicker from './ColorPicker';
import ArrowControl from './ArrowControl';
import ImageToTextControl from './ImageToTextControl';
import { Tab, Tabs, TabList, TabPanel } from './Tabs';
import Button, { CTA } from './Button';
import Overlay from './Overlay';
import Spinner from './Spinner';
import Frame from './Frame';
import Flex from './Flex';
import Share from './Share';
import Preview from './Preview';
import Order from './Order';
import Download from './Download';
import ThankYou from './ThankYou';
import { Container } from './Page';
import { isPhone, media } from '../style/utils';
import { aspectRatioForSize, closeModal, openModal } from '../lib/utils';
import { priceForSize, priceForDownload } from '../lib/price';
import samples from '../lib/samples';
import { getQueryParams, removeQueryParams } from '../lib/utils';
import { getShare } from '../lib/api';


const LayoutContainer = Flex.extend`
  padding-bottom: 30px;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0px 15px 30px;
  height: 100%;
  width: ${props => props.width};
  ${media.giant`
    max-width: ${props => props.giantMaxWidth};
  `}
  ${media.desktop`
    max-width: ${props => props.desktopMaxWidth};
  `}
  ${media.tablet`
    max-width: ${props => props.tabletMaxWidth};
  `}
  ${media.phone`
    max-width: ${props => props.phoneMaxWidth};
  `}
` 

const ControlSection = styled.div`
  width: 100%;
  h3 {
    font-size: ${modularScale(1)};
    font-weight: 600;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 5px 0px;
    margin-bottom: 20px;
  }
  margin-bottom: 20px;
`

const ActionButton = CTA.extend`
  margin: 30px 15px 0px;
`

const EditorWrapper = styled.div`
  padding: 1px;
  border-radius: 3px;
  border: 2px solid #f5f5f5;
  position: relative;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: ${props => props.framed ? 50 : 30}px;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
`

const OverlayMessage = styled.div`
  margin-top: 20px;
`

const EDITOR_WIDTH = isPhone() ? 300 : 450;

const textForCoupon = (hasCoupon, orderPrice) => {
  if (hasCoupon) {
    return {
      shareButtonText: 'Share',
      downloadButtonText: 'Download Only $4.50 (10% off)',
      orderButtonText: `Order $${orderPrice} (10% off)`,
      shareModalTitle: 'Share',
    }
  } else {
    return {
      shareButtonText: 'Share = 10% off',
      downloadButtonText: 'Download Only $5',
      orderButtonText: `Order $${orderPrice}`,
      shareModalTitle: 'Share for 10% off',
    }
  }
}

const orderDescription = (size, framed, amount) => {
  const many = amount > 1
  let desc = framed ? 'Framed' : ''
  const poster = many ? 'posters' : 'poster'
  const quant = many ? amount : ''
  return `${quant} ${desc} ${size} ${poster}`
}

class Create extends Component {
  constructor(props) {
    super(props)
    const { sampleId } = getQueryParams(props.location.search)
    const savedState = JSON.parse(window.localStorage ? window.localStorage.getItem('createState') : null)
    this.state = Object.assign({
      errorMessage: null,
      language: 'javascript',
      hasCoupon: false,
      mode: 'monokai',
      showLineNumbers: true,
      wrapEnabled: false,
      value: '// Paste your code here!',
      fontSize: isPhone() ? 8 : 12,
      size: '12x16',
      framed: true,
      horPadding: 0,
      verPadding: 0,
      paddingColor: 'none',
      backgroundColor: 'white',
      textColor: 'black',
      colorMode: 'editor',
      amount: 1,
    }, (sampleId ? samples[sampleId] : savedState) || {})
  }

  componentWillMount() {
    const { startLoading, stopLoading, location } = this.props
    const { shareId } = getQueryParams(location.search)
    if (shareId) {
      startLoading('Fetching share...')
      getShare(shareId).then(res => res.json()).then(({options}) => {
        this.setState(options, stopLoading)
      }).catch((error) => {
        this.setState({ errorMessage: 'Sorry we were unable to fetch the share.'})
      })
    }
  }

  applyCoupon = () => {
    this.setAndSaveState({
      hasCoupon: true,
    })
  }

  saveState = () => {
    const { errorMessage, ...editorState} = this.state
    const { history, location } = this.props
    const { sampleId, shareId } = getQueryParams(location.search)
    if (!shareId) {
      window.localStorage && window.localStorage.setItem('createState', JSON.stringify(editorState))
    }
    if (sampleId) {
      history.push(`/create${removeQueryParams(location.search, ['sampleId', 'shareId'])}`)
    }
  }

  moveTextUp = () => {
    const newValue = this.state.value.split('\n').slice(1).join('\n');
    this.onSettingsChange('value', newValue)
  }

  moveTextDown = () => {
    this.onSettingsChange('value', '\n' + this.state.value)
  }

  moveTextLeft = () => {
    const newValue = this.state.value.split('\n').map(line => line.slice(1)).join('\n')
    this.onSettingsChange('value', newValue)
  }

  moveTextRight = () => {
    const newValue = this.state.value.split('\n').map(line => ' ' + line).join('\n')
    this.onSettingsChange('value', newValue)
  }

  onSettingsChange = (key, value) => {
    this.setAndSaveState({
      [key]: value,
    })
  }

  setAndSaveState = (state) => {
    this.setState(state, this.saveState)
  }

  onValueChange = (value) => {
    if (value && this.state.value !== value) {
      this.setAndSaveState({ value })
    } else {
      this.setState({ value })
    }
  }

  render() {
    const { errorMessage, hasCoupon, ...options } = this.state
    const { 
      language, 
      fontSize, 
      size, 
      framed, 
      mode, 
      showLineNumbers, 
      wrapEnabled, 
      value, 
      horPadding, 
      verPadding, 
      paddingColor, 
      backgroundColor, 
      textColor, 
      colorMode,
      amount,
    } = options;
    const width = EDITOR_WIDTH
    const height = aspectRatioForSize(size)*EDITOR_WIDTH 
    const orderOptions = Object.assign({}, options, { width, height })
    const { location, history, isLoading, loadingMessage } = this.props
    const isTest = location.search.includes('test')
    const { modal, data } = getQueryParams(location.search)
    const price = priceForSize(size, framed, hasCoupon && '10off')*amount
    const downloadPrice = priceForDownload(hasCoupon && '10off')
    const description = orderDescription(size, framed, amount)
    const {
      shareButtonText,
      downloadButtonText,
      orderButtonText,
      shareModalTitle
    } = textForCoupon(hasCoupon, price)
    return (
      <Container>
        {isLoading && (
          <Overlay> 
            <div>          
              <Spinner scale={6}/>
            </div>
            <OverlayMessage> {loadingMessage} </OverlayMessage>
          </Overlay>
          )
        }
        <LayoutContainer 
          maxWidth='1170px' 
          direction='row' 
          wrap={true}
          justifyContent='center'
        >
          <SectionContainer>
            <EditorWrapper framed={framed}> 
              {framed && ( 
                <Frame 
                  width={width} 
                  height={height} 
                  thickness={EDITOR_WIDTH / 10}
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
                colorMode={colorMode}
                textColor={textColor}
                backgroundColor={backgroundColor}
              />
            </EditorWrapper>
            <Flex justifyContent='space-around' wrap={true}>
              <Button onClick={() => this.setState({ value: this.state.value.replace(/\s+/g,' ') })}>Remove whitespace</Button>
              <ArrowControl
                onUp={this.moveTextUp}
                onDown={this.moveTextDown}
                onLeft={this.moveTextLeft}
                onRight={this.moveTextRight}
              />
            </Flex>
          </SectionContainer>
          <SectionContainer 
            width='575px'
            giantMaxWidth='350px'
            desktopMaxWidth='275px'
            tabletMaxWidth='420px'
            phoneMaxWidth='350px'
          >
            <ControlSection>
              <h3> Shape your code into a logo? </h3>
              <ImageToTextControl
                editorText={value}
                onNewText={(text, charsPerRow) => this.setAndSaveState({
                  value: text,
                  fontSize: (() => {
                    switch(charsPerRow) {
                      case 100: 
                        return 8
                      case 150:
                        return 5.5
                      case 200: 
                        return 4
                      case 250:
                        return 3
                      case 300: 
                        return 2.5
                      default:
                        return fontSize
                    }
                  })()
                })}
              />
            </ControlSection>
            <ControlSection>
              <h3> Style</h3>
              <Flex wrap={true} alignItems='baseline' justifyContent='center'>
                <Flex maxWidth='275px'>
                  <Tabs 
                    selectedIndex={colorMode === 'editor' ? 0 : 1}
                    onSelect={(index) => this.onSettingsChange('colorMode', index ? 'custom' : 'editor')}
                  >
                    <TabList>
                      <Tab>Editor Color</Tab>
                      <Tab>Custom Color</Tab>
                    </TabList>
                    <TabPanel>
                      {controls({
                        language,
                        mode,
                      }, this.onSettingsChange)}
                    </TabPanel>
                    <TabPanel>
                      <ColorPicker
                        label='Background Color' 
                        color={backgroundColor}
                        onChange={({hex}) => this.onSettingsChange('backgroundColor', hex)}
                      />
                      <ColorPicker 
                        label='Text Color'
                        color={textColor}
                        onChange={({hex}) => this.onSettingsChange('textColor', hex)}
                      />
                    </TabPanel>
                  </Tabs>
                </Flex>
                <Flex maxWidth='275px' wrap={true}>
                  {controls({
                    fontSize,
                    showLineNumbers,
                    wrapEnabled,
                    paddingColor,
                    verPadding,
                    horPadding,
                  }, this.onSettingsChange)}
                </Flex>
              </Flex>
            </ControlSection>
            <ControlSection>
              <h3> Dimensions and Frame</h3>
              <Flex justifyContent='center'>
                {controls({
                  size, 
                  framed,
                  amount,
                }, this.onSettingsChange)}
              </Flex>
            </ControlSection>
            {errorMessage && <p><i> {errorMessage} </i></p>}
            <Flex wrap={true} justifyContent='center'> 
              <ActionButton 
                onClick={() => {
                  openModal(history, location, 'order')
                }}
              >{orderButtonText}</ActionButton>
              <ActionButton
                onClick={() => {
                  openModal(history, location, 'download')
                }}
              >{downloadButtonText}</ActionButton>
              <ActionButton
                onClick={() => {
                  openModal(history, location, 'share')
                }}
              >{shareButtonText}</ActionButton>
              <ActionButton
                onClick={() => {
                  openModal(history, location, 'preview')
                }}
              >Preview</ActionButton>
            </Flex>
          </SectionContainer>
        </LayoutContainer>
        {modal === 'share' && (
          <Overlay>
            <Modal title={shareModalTitle} close={() => closeModal(history, location)}>
              <Share 
                options={options} 
                hasCoupon={hasCoupon}
                applyCoupon={this.applyCoupon}
              />
            </Modal>  
          </Overlay>
        )}
        {modal === 'preview' && (
          <Overlay>
            <Modal title='Order Preview' close={() => closeModal(history, location)}>
              <Preview
                options={orderOptions}
                isPhone={isPhone()}
                openModal={(name) => openModal(history, location, name)}
              />
            </Modal>  
          </Overlay>
        )}
        {modal === 'order' && (
          <Overlay>
            <Modal title='Order Summary' close={() => closeModal(history, location)}>
              <Order
                price={price}
                description={description}
                isTest={isTest}
                options={orderOptions}
                history={history}
                search={location.search}
                openModal={(name, data) => openModal(history, location, name, data)}
              />
            </Modal>  
          </Overlay>
        )}
        {modal === 'thankyou' && (
          <Overlay>
            <Modal title='Thank You! 🎉 🎉 🎉 ' close={() => closeModal(history, location)}>
              <ThankYou
                id={data}
              />
            </Modal>  
          </Overlay>
        )}
        {modal === 'download' && (
          <Overlay>
            <Modal title='Download' close={() => closeModal(history, location)}>
              <Download
                price={downloadPrice}
                description={`${size} Poster File`}
                isTest={isTest}
                options={orderOptions}
                history={history}
                search={location.search}
                openModal={(name, data) => openModal(history, location, name, data)}
              />
            </Modal>  
          </Overlay>
        )}
      </Container>
    )
  }
}

export default Create