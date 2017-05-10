import React, { Component } from 'react';

import $ from 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


import Nav from './Nav';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  render() {
    return(
    	<div>
      		<Nav />
      		<Skills />
      		<Portfolio />
      		<Footer />

		  	<div className="copyright container-fluid text-center">
				<h3>CopyRight</h3>
				<a href="https://www.linkedin.com/in/hari-adhikari-6a149098/" target="blank">HARIA</a> &copy; 2017 privacy policy
			</div>
      	</div>
    );
  }
}

export default App;
