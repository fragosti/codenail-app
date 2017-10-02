import React, { Component } from 'react';
import AceEditor from 'react-ace';
import styled from 'styled-components';

import withCursorPosition from '../HOCs/withCursorPosition';
import { languages, themes } from './EditorControl';
import { zIndex } from '../style/utils';
import { shirts } from '../lib/products';

languages.forEach((lang) => {
  require(`brace/mode/${lang}`)
})

themes.forEach((theme) => {
  require(`brace/theme/${theme}`)
})


const Container = styled.div`
  padding: ${props => props.verPadding}px ${props => props.horPadding}px;
  ${props => props.paddingColor !== 'none' && `background-color: ${props.paddingColor} !important;`} 

  background-color: ${props => props.backgroundColor} !important;

  .ace_editor, .ace_scroller {
    background-color: ${props => props.backgroundColor} !important;
  }

  .ace_scrollbar-h, .ace_scrollbar-v {
    visibility: hidden;
  }

  .ace_editor .ace_marker-layer .ace_bracket { 
    visibility: hidden;
  }

  .ace_scroller {
    right: 0px !important;
    bottom: 0px !important;
    box-shadow: none !important;
  }
  .ace_content .ace_line {
    color: ${props => props.textColor} !important;
    
    .ace_keyword, 
    .ace_identifier, 
    .ace_paren,
    .ace_symbol,
    .ace_paren,
    .ace_constant,
    .ace_string,
    .ace_regexp,
    .ace_support,
    .ace_function,
    .ace_storage,
    .ace_type,
    .ace_variable,
    .ace_comment,
    .ace_parameter,
    .ace_punctuation {
      color: ${props => props.textColor} !important;
    }
  }
  .ace_gutter-cell {
    color: ${props => props.textColor} !important;
  }

  .ace_content, .ace_gutter, .ace_gutter-active-line {
    background-color: ${props => props.backgroundColor} !important;
  }
`

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasForceUpdated: false,
    }
  }

  componentDidUpdate(prevProps) {
    // Hack to fix scrolling issues after a resize
    if (prevProps.height !== this.props.height && this.ace) {
      window.dispatchEvent(new Event('resize'));
    }
  }

  backgroundColor = (productType, colorMode, color) => {
    if (productType === 'shirt') {
      return 'transparent'
    }
    return colorMode === 'custom' ? color : null;
  }

  render() {
    const { hasForceUpdated } = this.state
    const { 
      value, 
      onChange, 
      language, 
      theme, 
      wrapEnabled, 
      showLineNumbers, 
      fontSize, 
      height, 
      width, 
      horPadding, 
      verPadding, 
      paddingColor,
      colorMode,
      textColor,
      backgroundColor,
      productType,
    } = this.props
    const adjustedHeight = height-verPadding*2
    const adjustedWidth = width-horPadding*2
    const shouldOverrideColor = colorMode === 'custom'
    return (
      <Container 
        paddingColor={paddingColor} 
        horPadding={horPadding} 
        verPadding={verPadding} 
        className={`ace-${theme.replace('_', '-')}`}
        textColor={shouldOverrideColor ? textColor : null}
        backgroundColor={this.backgroundColor(productType, colorMode, backgroundColor)}
      >
        <AceEditor
          ref={(ref) => {
            if (ref) {
              this.ace = ref
              // Hack to allow cases where people want a very long continuous line with small font.
              if (fontSize < 9 && !hasForceUpdated) {
                ref.editor.session.bgTokenizer.tokenizer.$setMaxTokenCount(3000)
                ref.editor.setValue(value, 1)
                this.setState({ hasForceUpdated: true })
              }
            }
          }}
          mode={language}
          height={`${adjustedHeight}px`}
          width={`${adjustedWidth}px`}
          theme={theme}
          value={value}
          fontSize={fontSize}
          onChange={onChange}
          showGutter={showLineNumbers}
          wrapEnabled={wrapEnabled}
          showPrintMargin={false}
          highlightActiveLine={false}
          name="editor"
          editorProps={{$blockScrolling: Infinity}}
          setOptions={{
            showLineNumbers: showLineNumbers,
            useWorker: false,
            fontFamily: "'Menlo', 'Monaco', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
            cursorStyle: 'slim',
            hScrollBarAlwaysVisible: false,
            vScrollBarAlwaysVisible: false,
            displayIndentGuides: false,
          }}
        />
      </Container>
    )
  }
}

Editor.defaultProps = {
  width: 700,
  height: 990,
  verPadding: 0,
  horPadding: 0,
};


const magWidth = 350;
const magHeight = 350;
const Magnifier = styled.div`
  position: absolute;
  overflow: hidden;
  border: 2px solid white;
  width: ${magWidth}px;
  height: ${magHeight}px;
  z-index: ${zIndex.aboveEditor};
  background-color: ${props => props.bgColor};
  background-image: ${props => `url(${props.bgImage})`};
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  pointer-events: none;
  border-radius: 100%;
  box-shadow: 0px 3px 15px 1px rgba(0,0,0,.2);
`

const Positioner = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
`
export const EditorWithMagnification = withCursorPosition(({ 
  zoom,
  shirtColor,
  fontSize,
  position,
  height,
  width,
  ...rest
}) => {
  const { x, y } = position
  const isShirtPreview = rest.productType === 'shirt'
  const { effectiveColor, backgroundImage } = shirts[shirtColor]
  return (
    <div>
      <Magnifier
        bgImage={isShirtPreview && backgroundImage}
        bgColor={isShirtPreview ? effectiveColor : rest.colorMode === 'custom' ? rest.backgroundColor : null }
        left={x - magWidth / 2}
        top={y - magHeight / 2}
      >
        <Positioner
          left={-x*zoom + magWidth / 2}
          top={-y*zoom + magHeight / 2}
        >
          <Editor
            fontSize={fontSize*zoom}
            height={height*zoom}
            width={width*zoom}
            {...rest}
          /> 
        </Positioner>
      </Magnifier>
      <Editor 
        fontSize={fontSize}
        height={height}
        width={width}
        {...rest}
      />
    </div>
  )
})

EditorWithMagnification.defaultProps = {
  zoom: 4,
}


export default Editor