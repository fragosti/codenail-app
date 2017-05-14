import React, { Component } from 'react';
import Landing from './Landing';
import Create from './Create';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route path="/create" component={Create}/>
        </div>
      </Router>
    )
  }
}

export default App;
