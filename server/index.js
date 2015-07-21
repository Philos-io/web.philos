var express = require('express'),
	app = express(),
	compression = require('compression'),
	path = require('path');

var views = path.resolve(__dirname, '../public');

var port = process.env.PORT || 9000;
app.use(compression());
app.use(express.static(views));

console.log(views);

require('./routes/')(app);

app.listen(port, function(){
	console.log('app is running on port+ ', port);
});