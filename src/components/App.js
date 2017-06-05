import React, { Component } from 'react';

import { compose } from '../lib/utils';
import Landing from './Landing';
import Create from './Create';
import Render from './Render';
import ThankYou from './ThankYou';
import withHeaderFooter from '../HOCs/withHeaderFooter';
import withLoading from '../HOCs/withLoading';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={withHeaderFooter(Landing)}/>
          <Route path="/create" component={compose(withLoading, withHeaderFooter)(Create)}/>
          <Route path="/thankyou/:id" component={withLoading(withHeaderFooter(ThankYou), true)}/>
          <Route path="/render/:id" component={Render}/>
        </div>
      </Router>
    )
  }
}

export default App;
