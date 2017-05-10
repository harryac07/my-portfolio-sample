import React,{Component} from 'react';

class Footer extends Component{
	render(){
		return(
			<div className="container footer">
				<h1 className="text-center">CONTACT ME</h1>
				<h2 className="text-center">Keep in Touch</h2>
				<div className="well">
			        <div className="text-center">
			            <div className="contact-circle">
			                <a href="https://www.facebook.com/hurriee" target="blank"><i className="fa fa-facebook "></i></a>
			            </div>
			            <div className="contact-circle">
			                <a href="mailto:harry_ac07@yahoo.com"><i className="fa fa-yahoo"></i></a>
			            </div>
			            <div className="contact-circle">
			                <a href="https://www.linkedin.com/in/hari-adhikari-6a149098" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
			            </div>
			            <div className="contact-circle">
			                <a href="https://github.com/harryac07"><i className="fa fa-github"></i></a>
			            </div>
					</div>
					<div className="row">
						<div className="col-sm-6">
						    <div id="SearchContainer">
						        <form>
						            <div className="group">
						                <input type="text" id="Name" required />
						                <span className="highlight"></span>
						                <span className="bar"></span>
						                <label>Name</label>
						            </div>
						            <div className="group">
						                <input type="email" id="Email" required />
						                <span className="highlight"></span>
						                <span className="bar"></span>
						                <label>Email</label>
						            </div>
						            <div className="group">
						                <textarea name="feedback" required></textarea>
						                <span className="highlight"></span>
						                <span className="bar"></span>
						                <label>Feedback</label>
						            </div>

						            <button type="submit" id="Send">Submit Review</button>
						        </form>
						    </div>
						</div>

						<div className="col-sm-6">
		                    <address className="text-center">
		                    	<i className="material-icons md-70">place</i>
		                    	<h3>Hari Adhikari</h3>
		                        <span>
		                            Vieraskuja 5 A 11 <br />
		                            02770, Espoo<br />
		                            Finland
		                        </span>
		                	</address>
						</div>

					</div>
				</div>

				{/*goToTop*/} 
				<i className="arrow-up">
					<i className="fa fa-arrow-up" aria-hidden="true"></i>			
				</i>
			</div>
		);
	}
}
export default Footer;