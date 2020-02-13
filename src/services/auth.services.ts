
/**
 * auth services
 * This file is to provide authentication related services.
 * @package src/services
 * @subpackage services/suth.services
 * @author Sekhara suman sahu <sekharasahu@gmail.com>, krishnakanth<krishnakanth.r@ojas-it.com>
 */

import { DbConn } from '../config/db.config';
export class AuthServices {
  
  //TODO : Write method for user authentication services.
  /**
  @name authenticate.
  @description Method for authenticating users.
  @param : username  : string , unique id of an user.
  @param : password  : string , password of an user.
  @return : boolean = either true or false.
  */

  static async authenticate (username : string, password : string) {
    try {
      let coll = await DbConn.getCollObj();
      let cursor = await coll.findOne({"user_email" : [username]},{"user_password" : 1});
      console.log(cursor);
    }
    catch (err) {

    }
  }
}