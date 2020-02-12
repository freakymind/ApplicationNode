/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

//User class

export class User {
  userName: string;
  userEmail: String;
  password: String;
  userMmobile: String;
  userCountry: number;
  role: string;

  constructor(name: string, email: string, password : string, mobile: string, country: number) {
    this.userName = name;
    this.userEmail = email;
    this.userMmobile = mobile;
    this.userCountry = country;
    this.password = (password != "undefined" && password != null && password == '') ? password : this.generatePassword();
    this.role = this.setRole();
  }

  private generatePassword() {
    return "xyz";
  }

  private setRole() {
    return "COMPANY_ADMIN";
  }
}