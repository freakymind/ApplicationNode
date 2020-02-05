/**
 * db config
 * db file is to store all the database configurations required for the application. it get the value from
 * the .env file present at src/.env
 * @package src/config
 * @subpackage config/db.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
export const {
  check,
  validationResult,
  body
} = require('express-validator');


import {
  log
} from '../log/log.config';
//Mongodb configuration class
const MongoClient = require('mongodb').MongoClient;
export class DbConn {
  //Method for getting mongo connection object
  static async getConn() {
    log.info('getConn() initiated');
    try {
      if (this.conn == null) {
        this.client = await new MongoClient(this.url, this.options);
        this.conn = await this.client.connect();
        log.info('Database connected');
        log.info('getConn() completed');
      }
      return this.conn;
    } catch (err) {
      log.error(err);
    }
  }

  //Method for getting company collection object
  static async getCompanyColl() {
    log.info('getCompanyCol() initiated');
    try {
      if (this.coll == null) {
        let conn = await DbConn.getConn();
        this.db = await conn.db(process.env.DBNAME);
        this.coll = await db.collection('company');
        log.info('getCompanyColl() completed');
      }
      return this.coll;
    } catch (err) {
      log.error(err);
    }
  }
}

DbConn.client = null;
DbConn.db = null;
DbConn.conn = null;
DbConn.coll = null;
DbConn.url = 'mongodb://' + process.env.DBHOST + ':27017';
DbConn.options = {
  useNewUrlParser: true
}