import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default (Component) => (
  class extends React.Component {
    render() {
      window.ga('send', 'pageview')
      return (
        <div>
          <Header/>
          <Component {...this.props}/>
          <Footer/>
        </div>
      )
    }
  }
)