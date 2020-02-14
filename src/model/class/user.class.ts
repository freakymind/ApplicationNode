/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { Utill } from '../../util/utill.methods';
 //User class
export class User {
  private user_id : string;
  private user_name: string;
  private user_email: string;
  private user_password: string;
  private password_salt : string;
  private user_mobile: string;
  private user_country: string;
  private user_role: string;
  private user_status : boolean;
  private created_on : Date;
  private updated_on : Date;

  constructor(name: string, email: string, password : string, mobile: string, country: string,
  salt : string, address : string) {  
    this.user_id = this.generateUserId();
    this.user_name = name;
    this.user_email = email;
    this.user_mobile = mobile;
    this.user_country = country;
    this.password_salt = salt;
    this.user_password = password;
    this.user_role = this.setRole();
    this.user_status = true;
    this.created_on = new Date();
    this.updated_on = new Date();
  }

  private generateUserId () {
    return 'DSC-USER-'+Math.floor(Math.random()*10000);
  }

  // private generatePassword(password: string) {
  //   if (password == null || password == 'undefined') {
  //     password = 'dsc' + Math.floor(Math.random() * 1000000);
  //   }
  //   let salt = crypto.randomBytes(256).toString('hex');
  //   let hashedPw = crypto.pbkdf2Sync(password, salt, 99999, 512, 'sha512');
  //   return hashedPw.toString('hex');
  // }
  private setRole() {
    //TODO : Define the logic for assigning role to individual user.
    return "COMPANY_ADMIN";
  }
}