/**
 * User DAO
 * This file is responsible for user related services.
 * @package src/model
 * @subpackage model/dao/user.dao
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { User } from '../class/user.class';
import { DbConn } from '../../config/db.config';
import { transactionOptions } from '../../util/common.config';
import { log } from '../../log/log.config';
export class UserDAO {
  /**
 @name saveUser.
 @description Method for storing user document in USER collection.
 @param : username  : string , unique id of an user.
 @param : password  : string , password of an user.
 @return : Promise, either resolve or reject.
 */

  static async saveUser(user: User, session: any) {
    try {
      let coll = await DbConn.getUserColl();
      let saveUserRes = await coll.insertOne(user, { session });
      log.info(saveUserRes);
      return saveUserRes.ops[0];
    } catch (err) {
      log.error(err);
      //console.log(err);
    }
  }
}