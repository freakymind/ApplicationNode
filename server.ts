/**
 * app.js
 * This file acts as main file for this application a.k.a server file.
 * @package src/app.js
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth r<krishnakanth.r@ojas-it.com>
 */
import express,{Request,Response,NextFunction} from 'express';
import bodyparser from 'body-parser';
//import * as dotenv from "dotenv";
import cors from 'cors';



const app: express.Application = express();
export const router: express.Router = express.Router();

require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.use(cors());
//Router files
app.use('/service',require('./src/routes/API/company.api'));
app.use('/service',require('./src/routes/API/distributor.api'))

app.all('*', (req:Request, res:Response) => {
  res.status(404).json({
    status: 'fail',
    message: 'Requested route not found'
  })
});

const server:any = app.listen( process.env.SERVER_PORT, () => {
  console.log('Server is running on port '+ process.env.SERVER_PORT + '...!!!');
})

import { Init } from './src/config/init.config';
//Method for basic database configuration.
Init.init();

process.on('unhandledRejection', (err: any) => {
  console.error('There was an uncaught error', err);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app;