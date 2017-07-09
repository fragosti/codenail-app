import React, { Component } from 'react';

import { compose } from '../lib/utils';
import Landing from './Landing';
import Create from './Create';
import Render from './Render';
import ThankYou from './ThankYou';
import Privacy from './Privacy';
import FAQ from './FAQ';
import withHeaderFooter from '../HOCs/withHeaderFooter';
import withLoading from '../HOCs/withLoading';
import withTitle from '../HOCs/withTitle';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const LandingPage = withHeaderFooter(Landing)
const CreatePage = compose(withLoading, withHeaderFooter)(Create)
const ThankYouPage = withLoading(withHeaderFooter(ThankYou), true)
const PrivacyPage = withHeaderFooter(Privacy)
const FAQPage = withHeaderFooter(FAQ)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={withTitle(LandingPage, 'Codenail - Order a poster of your code in seconds!')}/>
          <Route path="/create" component={withTitle(CreatePage, 'Codenail - Create your poster')}/>
          <Route path="/thankyou/:id" component={withTitle(ThankYouPage, 'Codenail - Thank you for ordering')}/>
          <Route path="/render/:id" component={Render}/>
          <Route path="/privacy" component={withTitle(PrivacyPage, 'Codenail - Privacy Policy')}/>
          <Route path="/faq" component={withTitle(FAQPage, 'Codenail - Frequently Asked Questions')}/>
        </div>
      </Router>
    )
  }
}

export default App;
