/**
 * utill method 
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import crypto from 'crypto';
 //Utility class.
export class Utill {
  /**
  @name generateSalt.
  @description Method for generating salt for a password.
  @return : Encrypted random string.
 */
  static async generateSalt() {
    let salt = crypto.randomBytes(256).toString('hex');
    return salt;
  }

  /**
  @name generatePassword.
  @description Method for generating hashed password.
  @param : password  : string , password of an user.
  @param : salt  : Encrypted random value.
  @return : Hashed password.
 */
  static async generatePassword(password : string, salt: string) {
    //let salt = crypto.randomBytes(256).toString('hex');
    let hashedPw = crypto.pbkdf2Sync(password, salt, 99999, 512, 'sha512');
    return hashedPw.toString('hex');
  }
}  