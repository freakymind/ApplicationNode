
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
import { log } from '../log/log.config';
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
    try {
      let authRes = await AuthDAO.authenticate(username);
      
      if(authRes.length > 0){
        let user_email = authRes[0].user_email;
        let user_role = authRes[0].user_role;

        let salt = authRes[0].password_salt;
        let userPw = authRes[0].user_password;
        let hashPw = await Utill.generatePassword(password, salt);

        if(hashPw == userPw) {
          return await this.resObj(user_email, user_role, true);
        }
        return await this.resObj('', '', false);

      }
      else {
        return await this.resObj('', '', false);
      }
    } catch (err) {
      log.error(err);
    }
  }

  //Method for generating response Object
  static async resObj(email: string, role: string,
    isSuccess: boolean) {

    let loginRes = [];

    if (isSuccess) {

      let obj = {
        token: await JWT.generateToken({
          email: email,
          role: role
        }),
        status: isSuccess
      };

      loginRes.push(obj);
    }
    else {

      let obj = {
        status: isSuccess
      };

      loginRes.push(obj);
    }
    return loginRes;
  }
}