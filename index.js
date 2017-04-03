var express    = require('express');
var app        = express();
var mysql      = require('mysql');
app.get('/',function(){
	res.send('hello');
})