/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import passwordHash from 'password-hash';
//User class
export class User {
  private user_name: string;
  private user_email: string;
  private user_password: string;
  private user_mobile: string;
  private user_country: string;
  private user_role: string;
  private user_status : boolean;
  private created_on : Date;
  private updated_on : Date;

  constructor(name: string, email: string, password : string, mobile: string, country: string,
  address : string) {
  
    this.user_name = name;
    this.user_email = email;
    this.user_mobile = mobile;
    this.user_country = country;
    this.user_password = (password != "undefined" && password != null && password == '') ? password : this.generatePassword(passwordHash.generate(password));
    this.user_role = this.setRole();
    this.user_status = true;
    this.created_on = new Date();
    this.updated_on = new Date();
  }

  private generatePassword(password: string) {    
    return  passwordHash.generate(password);
  }
  private setRole() {
    return "COMPANY_ADMIN";
  }
}