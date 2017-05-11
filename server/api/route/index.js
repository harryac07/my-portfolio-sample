var express = require('express');
var router = express.Router();

var sendEmailctrl = require('../controllers/sendEmail');


router.post('/sendmail', sendEmailctrl.sendMail);

module.exports = router;