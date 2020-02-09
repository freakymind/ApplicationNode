/**
 * app.js
 * This file acts as main file for this application a.k.a server file.
 * @package src/app.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import express = require('express');
import bodyparser = require('body-parser');

const app : express.Application = express();
export const router : express.Router = express.Router();

require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

//Router files
app.use(require('./src/routes/API/company.api'));

app.listen( process.env.SERVER_PORT, () => {
  console.log('Server is running on port '+ process.env.SERVER_PORT + '...!!!');
})
module.exports = app;