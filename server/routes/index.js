var express = require('express'),
	path = require('path');

var dirPath = path.join(__dirname, '../../public');

module.exports = function(app){
	
	app.get('/contact', function(req, res){
		res.sendFile(path.join(dirPath+'/contact.html'));
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
}