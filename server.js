var express = require('express'),
	app = express();

app.listen(process.env.PORT || 9000);

app.use(express.static(__dirname));

exports = module.exports = app;