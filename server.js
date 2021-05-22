'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
  	var now  = new Date();
  	var hour = `${now.getHours()}`.padStart(2, '0');
  	var min  = `${now.getMinutes()}`.padStart(2, '0');
  	var sec  = `${now.getSeconds()}`.padStart(2, '0');
    client.send(`${hour}:${min}:${sec}`);
  });
}, 1000);