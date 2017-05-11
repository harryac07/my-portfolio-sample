var app = require('./app');
var PORT = process.env.PORT || 9000;

app.listen(PORT,function(){
	console.log('server is running at port : '+PORT);
});

