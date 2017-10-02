import React, { Component } from 'react';

import { compose } from '../lib/utils';
import Landing from './Landing';
import Create from './Create';
import Render from './Render';
import Pricing from './Pricing';
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
const PrivacyPage = withHeaderFooter(Privacy)
const FAQPage = withHeaderFooter(FAQ)
const PricingPage = withHeaderFooter(Pricing)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={withTitle(LandingPage, 'Codenail - Order a poster or shirt of your code in seconds!')}/>
          <Route path="/create" component={withTitle(CreatePage, 'Codenail - Create your product')}/>
          <Route path="/render/:id" component={Render}/>
          <Route path="/privacy" component={withTitle(PrivacyPage, 'Codenail - Privacy Policy')}/>
          <Route path="/faq" component={withTitle(FAQPage, 'Codenail - Frequently Asked Questions')}/>
          <Route path="/pricing" component={withTitle(PricingPage, 'Codenail - Pricing')}/>
        </div>
      </Router>
    )
  }
}

export default App;
