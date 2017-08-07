import React, { Component } from 'react';
import styled from 'styled-components';
import { ShareButtons } from 'react-share';
import { modularScale } from 'polished';

import withLoading from '../HOCs/withLoading';
import Spinner from './Spinner';
import Icon from './Icon';
import URLShare from './URLShare';
import Flex from './Flex';
import { createShare } from '../lib/api';
import { colors } from '../style/utils';

const ShareIconWrap = styled.div`
  margin-top: 40px;
  margin-right: 25px;
  margin-left: 25px;
  cursor: pointer;
  &:hover path {
    fill: ${props => props.hoverColor};
  }
`

const Message = styled.section`
  margin: 15px 0px 20px;
  padding: 0px 20px;
  font-size: ${modularScale(0.5)};
  p {
    margin-bottom: 15px;
  }
`

const { FacebookShareButton, TwitterShareButton } = ShareButtons

class Share extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      errorMessage: null,
    }
  }

  componentWillMount() {
    const { stopLoading, options } = this.props
    createShare({ options }).then(res => res.json())
    .then(({id}) => {
      this.setState({id})
      stopLoading()
    })
    .catch(() => this.setState({
      errorMessage: 'Sorry, something went wrong in creating your share link.'
    }))
  }

  render() {
    const { id } = this.state;
    const { isLoading } = this.props;
    const url = `https://codenail.com/create?shareId=${id}`;
    const social = {
      title: "Codenail",
      description: "Just created this awesome poster on Codenail!",
      hashtags: ['art', 'code', 'poster'],
      url,
    }
    return (isLoading ? (<Spinner scale={6} rgbaColor={colors.gray}/>) : (
      <Flex direction='column' alignItems='center'>
        <Message>
          <p>
            The link will allow your friends to see exactly what you have in the 
            editor right now.
          </p>
          <p>
            Share the link below on Twitter or Facebook to automatically get
            10% off your purchase!
          </p>
        </Message>
        <URLShare url={url} displayText={`codenail.com/create?shareId=${id}`}/>
        <Flex justifyContent='center'> 
          <FacebookShareButton 
            title={social.title}
            description={social.description}
            url={social.url}
          >
            <ShareIconWrap hoverColor='#3B5998'>
              <Icon name='facebook' size={40}/>
            </ShareIconWrap>
          </FacebookShareButton>
          <TwitterShareButton 
            title={social.title}
            url={social.url}
            via='codenail'
            hashtags={social.hashtags}
          >
            <ShareIconWrap hoverColor='#00aced'>
              <Icon name='twitter' size={40}/>
            </ShareIconWrap>
          </TwitterShareButton>
        </Flex>
      </Flex>
    ))
  }
}

export default withLoading(Share, true)