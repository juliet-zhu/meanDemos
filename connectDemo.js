'use strict';

var connect = require('connect');
var http = require('http');
var app = connect();

// #1

// var logger = function(req,res,next){
// 	console.log(req.method,req.url);
// 	next();
// };
// var helloWorld = function(req,res,next){
// 	res.setHeader('Content-Type','text/plain');
// 	res.end('Hello World');
// };
// console.log(app);
// app.use(logger);
// app.use(helloWorld);
// http.createServer(app).listen(3000);

// console.log('Server running at http://localhost:3000/');

// #2
var logger = function(req,res,next){
	console.log(req.method,req.url);
	next();
};
var helloWorld = function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World');
};
var goodbyeWorld = function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.end('Goodbye World');
};

app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodbyeWorld);
http.createServer(app).listen(3000);

console.log('Server running at http://localhost:3000/');
