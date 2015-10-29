require('babel/register');
var path = require('path');
var express = require('express');
var React = require('react');


var app = express();
app.set('views', 'public');

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', (process.env.PORT || 9000));

app.get('/', function(req, res){
  var Application = React.createFactory(require('./app/index'));
  var reactHtml = React.renderToString(Application({}));
  res.render('index.ejs', {reactOutput: reactHtml});
});

app.listen(app.get('port'), function() {
  console.log('HTTP server is running at http://localhost:' + app.get('port'));
});
