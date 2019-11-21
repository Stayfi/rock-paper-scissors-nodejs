#!/usr/bin/env node

const app = require('../app').app;
const http = require('http');
const config = require('../config/app.config');

const server = http.createServer(app);
server.listen(config.port, serverListening);

function serverListening() {
  console.log(
    `===========================\n` +
    ` > Server started on ${config.port}\n` +
    `===========================`
  );
}
