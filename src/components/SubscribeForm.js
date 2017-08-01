import React from 'react';

import { CTA } from './Button'; 
import Input from './Input';

const SubmitCTA = CTA.withComponent('input')

const EmailInput = Input.extend`
  margin: 15px;
`

const SubscribeForm = () => (
  <form action="//codenail.us16.list-manage.com/subscribe/post?u=2ae31a881bb967596e06a9f8d&amp;id=97aff481b5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
    <div id="mc_embed_signup_scroll">
      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
        <input type="text" name="b_2ae31a881bb967596e06a9f8d_97aff481b5" tabIndex="-1" value=""/>
      </div>
      <EmailInput type="email" name="EMAIL" id="mce-EMAIL" defaultValue="" placeholder="email address" required/>
      <SubmitCTA type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"/>
    </div>
  </form>
)

export default SubscribeForm