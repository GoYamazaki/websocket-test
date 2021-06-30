'use strict';

var express = require('express');
var app = express();
app.set('view engine', 'pug')

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
  if(req.query?.hasOwnProperty('code')){
    res.render('ok', { code: req.query.code });
    return;
  }
  res.sendFile('index.html', {root: __dirname});
});

var server = app.listen(PORT, ()=>{
                  console.log(`Listening on ${PORT}`);
                });