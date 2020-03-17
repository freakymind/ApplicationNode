/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
//import { Utill } from '../../util/utill.methods';
import { status } from '../../util/common.config';
 //User class
export abstract class User {
  private user_id : string;
  private user_name: string;
  private user_email: string;
  private user_password: string;
  private password_salt : string;
  private user_mobile: string;
  private user_country: string;
  private user_address: string;
  private user_role: string;
  private user_status : string;
  private created_on : Date;
  private updated_on : Date;

  

  constructor(name: string, email: string, password : string, mobile: string, country: string,
  salt : string, address : string,role:string) {  
    this.user_id = this.generateUserId();
    this.user_name = name;
    this.user_email = email;
    this.user_mobile = mobile;
    this.user_country = country;
    this.user_address = address;
    this.password_salt = salt;
    this.user_password = password;
    this.user_role = role;
    this.user_status = this.setStatus();
    this.created_on = new Date();
    this.updated_on = new Date();
  }
  
  private setStatus () {
    //TODO : Need to define logic here for setting user role
    return status.pending;
  }

  abstract generateUserId() : string;
  // abstract setRole() : string;

  //Required getter methods
  getUserId() {
    return this.user_id;
  }

  getUserName () {
    return this.user_name;
  }

  getUserEmail () {
    return this.user_email;
  }

  getUserMobile () {
    return this.user_mobile;
  }

  getUserCountry () {
    return this.user_country;
  }

  getUserAddress () {
    return this.user_address;
  }

  getUserRole () {
    return this.user_role;
  }

  getUserStatus () {
    return this.user_status;
  }

  getUserCreatedOn () {
    return this.created_on;
  }

  getUserUpdatedOn () {
    return this.updated_on;
  }
}