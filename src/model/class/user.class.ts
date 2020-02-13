/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import * as passwordHash from 'password-hash';
//User class
export class User {
  userName: string;
  userEmail: String;
  password: any;
  userMmobile: String;
  userCountry: number;
  role: string;
  randomString: any;

  constructor(name: string, email: string, mobile: string, country: number) {
    this.userName = name;
    this.userEmail = email;
    this.userMmobile = mobile;
    this.userCountry = country;
    this.randomString = this.generateRandomNumber();
    this.password = this.generatePassword(this.randomString);
    this.role = this.setRole();
  }
  public generateRandomNumber() {
    //let randomNumber = Math.random().toString(36).substring(7);
    let randomNumber = "ojas1525";
    console.log(randomNumber);
    return randomNumber;
  }
  private generatePassword(randomString: any) {
    return passwordHash.generate(randomString);
  }
  private setRole() {
    return "COMPANY_ADMIN";
  }
}