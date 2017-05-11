
/* for nodemoailer login confirmation */
var nodemailer = require('nodemailer');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

/* Send email */
module.exports.sendMail = function(req, res) {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'harryac007@gmail.com', // your email here
			pass: process.env.EMAIL_SECRET // your password here
		}
	});

	var mailOptions = {
		from: req.body.email, // sender address
		to : 'harry_ac07@yahoo.com',
		subject: 'feedback by '+req.body.name, // Subject line
		html: "<h3>This feedback was sent by : </h3>Email : "+req.body.email+"<br><br>"+req.body.feedback+"<br><br>sent at : "+Date()
			// html or text
	};

	transporter.sendMail(mailOptions, function(err, info) {
		if (err) {
			return;
		} else if (!info) {
			sendJSONresponse(res, 404, {
				"message": "not found email."
			});
			return;
		} else {
			console.log('Message sent: ' + info);
			sendJSONresponse(res, 200, info);

		}
	});
};