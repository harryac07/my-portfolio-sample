import React,{Component} from 'react';

class Skills extends Component{
	render(){
		return(
			<div className="container skills">
				<h1 className="text-center">PROFESSIONAL</h1>
				<h2 className="text-center">My Skills in Web World</h2>
				<div className="well skills-animate">
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>jquery</label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
							    	80% jQuery
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>React JS</label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    	70% React JS
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>Angular JS</label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
							    	60% Angular JS
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>NODE / EXPRESS JS</label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    	70% NODE / EXPRESS JS
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>PHP</label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
							    	50% PHP
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>MongoDB </label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    	70% MongoDB
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>MYSQL </label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
							    	75% MYSQL
							  	</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-3 col-sm-3 col-md-3">
							<label>Socket.io </label>
						</div>
						<div className="col-xs-9 col-sm-9 col-md-9">
							<div className="progress">
		    					<div className="progress-bar progress-bar-success active" role="progressbar" aria-valuenow="40" 
		    					aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
							    	80% Socket.io
							  	</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
export default Skills;