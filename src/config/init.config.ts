/**
 * init config
 * This file is to create Database and datasabe schema for application.
 * @package src/config
 * @subpackage config/init.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

import { DbConn } from '../config/db.config';

export class Init {
  private static conn : any = null;
  private static db : any = null;
  private static coll : any = null;
  private static collName : any = process.env.COLLNAME;
  private static schema : any = {
    validator: {
      $jsonSchema: {
        required: ["user", "company"],
        properties: {
          user: {
            bsonType: "array"
          },
          company: {
            bsonType: "object",
            required: ["company_name" , "company_email", "company_mobile", "company_address"],
            properties: {
              "company_name": { bsonType: "string" , description : "company_name has to be string"},
              "company_email": { bsonType: "string", description : "company_email has to be string"},
              "company_mobile": {bsonType : "string", description : "company_mobile has to be string"},
              "company_address": {bsonType : "string", description : "company_address has to be string"}
            }
          }
        }
      }
    }
  }


  static async init() {
    this.conn = await DbConn.getConnObj();
    this.db = await this.conn.db(process.env.DBNAME);
    this.db.createCollection(this.collName, this.schema);
  }
}