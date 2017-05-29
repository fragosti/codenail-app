import React, { Component } from 'react';
import Landing from './Landing';
import Create from './Create';
import withHeaderFooter from '../HOCs/withHeaderFooter';
import Render from './Render';
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
          <Route path="/create" component={withHeaderFooter(Create)}/>
          <Route path="/render/:id" component={Render}/>
        </div>
      </Router>
    )
  }
}

export default App;
