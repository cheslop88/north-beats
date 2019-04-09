import React, { Component } from 'react';
import './resources/styles.scss';
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Performing from './components/performing';
import Venue from './components/venue';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Directions from './components/directions';
import Headliners from './components/headliners';
import Previous from './components/previous';
import Exhibition from './components/exhibition';
import Newsletter from './components/newsletter';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="performing">
          <Performing/>
        </Element>

        {/*<Element name="venue">
          <Venue/>
          </Element>*/}
        
        <Element name="highlights">
          <Highlight/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Element name="directions">
          <Directions/>
        </Element>

        {/*<Element name="headliners">
          <Headliners/>
        </Element>*/}

        {/*<Element name="previous">
          <Previous/>
        </Element>*/}

        <Element name="exhibition">
          <Exhibition/>
        </Element>

        {/*<Element name="newsletter">
          <Newsletter/>
        </Element>*/}

        <Footer/>
      </div>
    );
  }
}

export default App;
