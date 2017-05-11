var express = require('express');
var router = express.Router();

var sendEmailctrl = require('../controllers/sendEmail');

router.get('/test',function(req, res){ //ok
	console.log('hello i am test');
});

router.post('/sendmail', sendEmailctrl.sendMail);

module.exports = router;