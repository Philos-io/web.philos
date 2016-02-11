'use strict';

let express = require('express'),
	app = express(),
	compression = require('compression'),
	path = require('path');

let views = path.resolve(__dirname, '../public');

let port = process.env.PORT || 9000;
app.use(compression());
app.use(express.static(views));

require('./routes/')(app);

app.listen(port, function(){
	console.log('app is running on port+ ', port);
});
