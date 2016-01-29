var express = require('express'),
	path = require('path');

var dirPath = path.join(__dirname, '../../public');

module.exports = function(app){

	app.get('/contact', function(req, res){
		res.sendFile(path.join(dirPath+'/contact.html'));
	});

  	app.get('/evaluation-form', function(req, res){
		res.sendFile(path.join(dirPath+'/evaluation-form.html'));
	});

	app.get('/evaluation-bootcamp', function(req, res){
		res.sendFile(path.join(dirPath+'/evaluation-bootcamp.html'));
	});

  	app.get('/devoxx', function(req, res){
		res.sendFile(path.join(dirPath+'/devoxx.html'));
	});

	app.get('/masterclass', function(req, res){
		res.sendFile(path.join(dirPath+'/masterclass.html'));
	});

	app.get('/program', function(req, res){
		res.sendFile(path.join(dirPath+'/program.html'));
	});

	app.get('/about', function(req, res){
		res.sendFile(path.join(dirPath+'/about.html'));
	});

	app.get('/events', function(req, res){
		res.sendFile(path.join(dirPath+'/events.html'));
	});

	app.get('/about', function(req, res){
		res.sendFile(path.join(dirPath+'/about.html'));
	});

	app.get('/faq', function(req, res){
		res.sendFile(path.join(dirPath+'/faq.html'));
	});

	app.get('/crack-the-code', function(req, res){
		res.sendFile(path.join(dirPath+'/crack-the-code.html'));
	});
}
