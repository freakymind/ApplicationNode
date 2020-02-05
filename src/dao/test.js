/**
 * company model
 * This file to define database schema for company collections.
 * @package src/model
 * @subpackage model/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { getDbConn } from '../config/db.config';

 //Company DAO
 export class TestDAO {
  static async saveName(name) {
    try {
      let conn = await getDbConn();
      let data = {
        name : name
      }
      let testRes = await conn.insertOne(data);
      if(testRes) {
        return testRes;
      } else {
        return {err : err};
      }
    } catch (err) {
      console.log(err);
    }
  
  }
 }  