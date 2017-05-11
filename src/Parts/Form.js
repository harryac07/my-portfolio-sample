import React,{Component} from 'react';
import axios from 'axios';

class Form extends Component{
	constructor(props){
		super(props);
        this.state={
            feedback:false
        };
	}

	submit=(e)=>{
		e.preventDefault();
		var name=this.escapeHtml(this.refs.name.value);
		var email=this.escapeHtml(this.refs.email.value);
		var feedback=this.escapeHtml(this.refs.feedback.value);

		/* handling feedback form submission */
		axios.post('/api/sendmail',{
			name:name,
			email:email,
			feedback:feedback
		})
		.then(function (response) {
			console.log('Thank you for your feedback!');
		})
		.catch(function (error) {
		    console.log(error);
		});

		this.refs.name.value='';
		this.refs.email.value='';
		this.refs.feedback.value='';

		this.setState({feedback:true}); // change feedback state to true
		/* hide after 2 secs */
		setTimeout(function() { 
			this.setState({feedback: false});
			document.querySelectorAll('.alert .alert-info')[0].style.visibility = 'hidden';
		}.bind(this), 2500);

	}

	/* escape html entities for preventing XXS */
	escapeHtml=(text)=>{
		var map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};

		return text.replace(/[&<>"']/g, function(m) {
			return map[m];
		});
	}

	render(){
		return(
		    <div id="SearchContainer">
		    	{
		    		this.state.feedback ? <div className="alert alert-info alert-dismissable fade in text-center">Thank you for the feedback!</div> 
		    							: null
		    		 
		    	}
		        <form onSubmit={this.submit}>
		            <div className="group">
		                <input ref="name" type="text" id="Name" autoComplete="off" required />
		                <span className="highlight"></span>
		                <span className="bar"></span>
		                <label>Name</label>
		            </div>
		            <div className="group">
		                <input ref="email" type="email" id="Email" autoComplete="off" required />
		                <span className="highlight"></span>
		                <span className="bar"></span>
		                <label>Email</label>
		            </div>
		            <div className="group">
		                <textarea ref="feedback" name="feedback" autoComplete="off" required></textarea>
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