import React,{Component} from 'react';

class Portfolio extends Component{
	render(){
		return(
			<div>
				<div className="container portfolio">
					<h1 className="text-center">PORTFOLIO</h1>
					<h2 className="text-center">My projects and works sample</h2>
					<div className="row">
						<a href="https://github.com/harryac07" target="_blank"><button className="more-project-button">More Projects</button></a>
						<div className="col-sm-4 col-md-4 col-xs-12 animate-image">
							<div>
								<figure><img src="/images/gadget.jpg" className="img img-responsive image-portfolio" /></figure>
							  	<div className="middle">
							    	<a href="https://profinder1.herokuapp.com/#/" target="blank"><div className="text">visit me</div></a>
							  	</div>
						  	</div>
						</div>
						<div className="col-sm-4 col-md-4 col-xs-12 animate-image">
							<div>
								<figure><img src="/images/blog.png" className="img img-responsive image-portfolio" /></figure>
								<div className="middle">
							    	<a href="http://kathmandudaily.herokuapp.com/" target="blank"><div className="text">visit me</div></a>
							  	</div>
						  	</div>
						</div>
						<div className="col-sm-4 col-md-4 col-xs-12 animate-image">
							<div>
								<figure><img src="/images/codepen.png" className="img img-responsive image-portfolio" /></figure>
								<div className="middle">
							    	<a href="http://codepen.io/haria/" target="blank"><div className="text">visit me</div></a>
							  	</div>
							</div>
						</div>
						<div className="col-sm-4 col-md-4 col-xs-12 animate-image">
							<div>
								<figure><img src="/images/shivasai.jpg" className="img img-responsive image-portfolio" /></figure>
							  	<div className="middle">
							    	<a href="http://www.shivasaiconstruction.com/" target="blank"><div className="text">visit me</div></a>
							  	</div>
						  	</div>
						</div>
						<div className="col-sm-4 col-md-4 col-xs-12 animate-image">
							<div>
								<figure><img src="/images/github.jpg" className="img img-responsive image-portfolio" /></figure>
								<div className="middle">
							    	<a href="https://github.com/harryac07" target="blank"><div className="text">visit me</div></a>
							  	</div>
						  	</div>
						</div>
						<div className="col-sm-4 col-md-4 col-xs-12 animate-image">
							<div>
								<figure><img src="/images/tictactoe.jpg" className="img img-responsive image-portfolio" /></figure>
								<div className="middle">
							    	<a href="http://codepen.io/haria/full/qRQxQX" target="blank"><div className="text">visit me</div></a>
							  	</div>
							</div>
						</div>
						
					</div>

					<div className="download">
						<a href="/file/cv.pdf" download="cv_hari" className="text-center download-link">DOWNLOAD CV</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
