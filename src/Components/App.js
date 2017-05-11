import React, { Component } from 'react';

import $ from 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


import Nav from '../Parts/Nav';
import Skills from '../Parts/Skills';
import Portfolio from '../Parts/Portfolio';
import Contact from '../Parts/Contact';
import Footer from '../Parts/Footer';

class App extends Component {
  render() {
    return(
    	<div>
      		<Nav />
      		<Skills />
      		<Portfolio />
      		<Contact />
          <Footer />
      	</div>
    );
  }
}

export default App;
