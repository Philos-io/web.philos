/**
 * Entry point of the app using Express
**/

import express from 'express';
import compression from 'compression';
import path from 'path';
import config from './config';

let app = express();
let views = path.resolve(path.join(__dirname, '..',  config.entry));
let port = process.env.PORT || 9000;

app.use(compression());
app.use(express.static(views));
require('./routes/')(app);

app.listen(port, () => {
	console.log('app is running on port+ ', port);
});
