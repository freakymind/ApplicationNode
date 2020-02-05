/**
 * app.js
 * This file acts as main file for this application a.k.a server file.
 * @package src/app.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */


const express = require('express');
const bodyparser = require('body-parser');

const app = express();
global.router = express.Router()
app.use(bodyparser.urlencoded({
  extended: true 
}));
app.use(bodyparser.json());

require('dotenv').config();

app.use(require('./routes/API/company.api'));


import { log } from './log/log.config';
log.info('hello');
log.error('Error');
log.warn('Warn');
app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log('Error occured while running the server...!!!');
  console.log('Server running on ' + process.env.SERVER_PORT);

})

module.exports = app;