var express = require('express'),
	app = express();

app.listen(process.env.PORT || 9000);

exports = module.exports = app;