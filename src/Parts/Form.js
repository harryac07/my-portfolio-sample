import React,{Component} from 'react';

class Form extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
		    <div id="SearchContainer">
		        <form>
		            <div className="group">
		                <input ref="name" type="text" id="Name" required />
		                <span className="highlight"></span>
		                <span className="bar"></span>
		                <label>Name</label>
		            </div>
		            <div className="group">
		                <input ref="email" type="email" id="Email" required />
		                <span className="highlight"></span>
		                <span className="bar"></span>
		                <label>Email</label>
		            </div>
		            <div className="group">
		                <textarea ref="feedback" name="feedback" required></textarea>
		                <span className="highlight"></span>
		                <span className="bar"></span>
		                <label>Feedback</label>
		            </div>

		            <button type="submit" id="Send">Submit Review</button>
		        </form>
		    </div>
		);
	}
}

export default Form;