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
  private name: string;
  private email: string;
  private password: string;
  private mobile: string;
  private country: string;
  private role: string;
  private status : boolean;

  constructor(name: string, email: string, password : string, mobile: string, country: string) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.country = country;
    this.password = (password != "undefined" && password != null && password == '') ? password : this.generatePassword(passwordHash.generate(password));
    this.role = this.setRole();
    this.status = true;
  }
  private generatePassword(password: string) {    
    return  passwordHash.generate(password);
  }
  private setRole() {
    return "COMPANY_ADMIN";
  }    
}