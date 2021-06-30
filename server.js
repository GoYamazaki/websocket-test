'use strict';

var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
  if(res.query?.hasOwnProperty('code')){
    console.log(`OK Your code is ${res.query.code}`)
    res.render('ok', { code: res.query.code });
    return;
  }
  res.sendFile('index.html', {root: __dirname});
});

var server = app.listen(PORT, ()=>{
                  console.log(`Listening on ${PORT}`);
                });