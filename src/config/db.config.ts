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
  private static coll: any = null;
  private static url: any = "mongodb+srv://m001-student:Sekharsahu@123@cluster0-ysylc.mongodb.net/test?retryWrites=true&w=majority";
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

  //Method for getting collection object
  static async getCollObj() {
    try {
      if (this.coll == null) {
        this.conn = await this.getConnObj();
        this.db = await this.conn.db(process.env.DBNAME);
        this.coll = await this.db.collection(process.env.COLLNAME);
      }
      log.info(message.basic.db_succ);
      return this.coll;
    }
    catch (err) {
      log.error(message.basic.db_err + err);
      throw err;
    }
  }
}