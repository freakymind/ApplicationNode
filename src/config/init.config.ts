/**
 * init config
 * This file is to create Database and datasabe schema for application.
 * @package src/config
 * @subpackage config/init.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

import { DbConn } from '../config/db.config';

export class Init {
  constructor () {
    Init.init();
  }
  private static conn : any = null;
  private static db : any = null;
  private static coll : any = null;
  private static collName : any = process.env.COLLNAME;
  private static schema : any = {
    validator: {
      $jsonSchema: {
        required: ["name", "address"],
        properties: {
          name: {
            bsonType: "string",
            description: "must be a string and is required"
          },
          address: {
            bsonType: "object",
            required: ["town" , "zipcode"],
            properties: {
              "town": { bsonType: "string" , description : "Town name has to be "},
              "zipcode": { bsonType: "string" }
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
  static async insert () {
    this.coll = await DbConn.getCollObj();
    this.coll.insertOne({demo : "Demo"});
  }
}