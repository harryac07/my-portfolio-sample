import React,{Component} from 'react';

class Nav extends Component{
	render(){
		return(
			<div className="navigation">
				<nav className="navbar ">
					<div className="container-fluid">
					    <div className="navbar-header">
					      	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span> 
					      	</button>
					      	<a className="navbar-brand" href="/">&lt; Haria /&#62;</a>
					    </div>
					    <div className="collapse navbar-collapse" id="myNavbar">
					      	<ul className="nav navbar-nav navbar-right">
						        <li className="active home"><a>HOME</a></li>
						        <li className=" skills-nav"><a>SKILLS</a></li>
						        <li className=" portfolio-nav"><a>PORTFOLIO</a></li> 
						        <li className=" contact-nav"><a>CONTACT</a></li> 
					      	</ul>
					    </div>
					</div>
				</nav>
				<h1 className="text-center main-header">WEB DEVELOPER</h1>
			  	<h2 className="text-center">FRONT AND BACK ENDS</h2>
				<img src="/images/me.jpg" className="img img-responsive main_image" style={{height:"275px",width:"275px"}}/>
				<br />
			</div>
		);
	}
}
export default Nav;