
/**
 * auth services
 * This file is to provide authentication related services.
 * @package src/services
 * @subpackage services/suth.services
 * @author Sekhara suman sahu <sekharasahu@gmail.com>, krishnakanth<krishnakanth.r@ojas-it.com>
 */
import { AuthDAO } from '../model/dao/auth.dao';
import { Utill } from '../util/utill.methods';
import { JWT } from '../model/class/jwt.class';
import { message } from '../util/text.config';
//Auth services class
export class AuthServices {
  /**
 @name login.
 @description Method for authenticating users.
 @param : username  : string , unique id of an user.
 @param : password  : string , password of an user.
 @return : boolean = either true or false.
 */
  static async login(username: string, password: string) {
    let authRes = await AuthDAO.authenticate(username);
    let hashPw = await Utill.generatePassword(password, authRes[0].user[0].password_salt);

    if (hashPw == authRes[0].user[0].user_password) {
      let loginRes = [{
        token: await JWT.generateToken({
          email: authRes[0].user[0].user_email,
          role: authRes[0].user[0].user_role
        }),
        status : true
      }]
      return loginRes;
    } else {
      let loginRes = [{
        status : false
      }]
      return loginRes;
    }
  }
}