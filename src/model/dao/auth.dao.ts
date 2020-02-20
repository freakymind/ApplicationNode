/**
 * AUthentication DAO
 * This file is responsible for user authentication services.
 * @package src/model
 * @subpackage model/dao/auth.dao
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { DbConn } from '../../config/db.config';
import { log } from '../../log/log.config';
//Authentication DAO class

export class AuthDAO {
  /**
 @name authenticate.
 @description Method for authenticating users.
 @param : username  : string , unique id of an user.
 @param : password  : string , password of an user.
 @return : boolean = either true or false.
 */

  static async authenticate(username: string) {
    try {
      let coll = await DbConn.getUserColl();
      let cursor = await coll.find({ "user_email": username })
        .project({ _id: 0, "user_password": 1 , "password_salt" : 1,
        "user_email" : 1, "user_role" : 1, "user_id" : 1})
        .toArray();
      return cursor;  
    }
    catch (err) {
      log.error(err);
      throw err;
    }
  }
}
