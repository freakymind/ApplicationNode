import { SERVER_PORT } from './config/environment.config';

import express = require('express');
import bodyparser = require('body-parser');


//declare let app : any;
const app : express.Application = express();
export const router : express.Router = express.Router();

require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.listen( SERVER_PORT, () => {
  console.log('Server is running on port '+ SERVER_PORT + '...!!!');
})
module.exports = app;