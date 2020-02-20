/**
 * db config
 * db file is to store all the database configurations required for the application. it get the value from
 * the .env file present at src/.env
 * @package src/config
 * @subpackage config/db.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { log } from '../log/log.config';
import { message } from '../util/text.config';
//Mongodb configuration class
const MongoClient = require('mongodb').MongoClient;

export class DbConn {
  private static client: any = null;
  private static conn: any = null;
  private static db: any = null;
  private static user_coll: any = null;
  private static comp_coll: any = null;
  //private static url: any = 'mongodb://' + process.env.DBHOST + ':' + process.env.DBPORT;
  private static url: any = "mongodb+srv://"+process.env.ATLAS_USER_NAME+':'+process.env.ATLAS_PW+'@cluster0-ysylc.mongodb.net/test?retryWrites=true&w=majority'
  private static options: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  //Method for getting connection object
  static async getConnObj() {
    try {
      if (this.conn == null) {
        this.client = new MongoClient(this.url, this.options);
        this.conn = await this.client.connect();
      }
      return this.conn;
    }
    catch (err) {
      log.error(err);
      throw err;
    }
  }

  //Method for getting user collection object
  static async getUserColl() {
    try {
      if (this.user_coll == null) {
        this.db = await this.getDbObj();
        this.user_coll = await this.db.collection(process.env.USER_COLL);
      }
      log.info(message.basic.db_succ);
      return this.user_coll;
    }
    catch (err) {
      log.error(message.basic.db_err + err);
      throw err;
    }
  }


  //Method for getting company collection object
  static async getCompColl() {
    try {
      if (this.comp_coll == null) {
        this.db = await this.getDbObj();
        this.comp_coll = await this.db.collection(process.env.COMP_COLL);
      }
      log.info(message.basic.db_succ);
      return this.comp_coll;
    }
    catch (err) {
      log.error(message.basic.db_err + err);
      throw err;
    }
  }

  //Method for getting DB object
  static async getDbObj () {
    try {
      if(this.db == null) {
        this.client = new MongoClient(this.url, this.options);
        this.conn = await this.client.connect();
        this.db = await this.conn.db(process.env.DBNAME);
      }
      return this.db;
    } catch (err) {
      log.error(message.basic.db_err + err);
      throw err;
    }
  }
}
