/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

 import { Utill } from '../../util/utill.methods';
//Comapny class

export class Company {
  private company_id : string;
  private company_name: string;
  private company_email: string;
  private company_address: string;
  private company_mobile: string;
  private users : Array<Object>;
  private distributors : Array<Object>;
  private created_on : Date;
  private updated_on : Date;

  constructor(name: string, email: string, mobile: string, address: string) {
    this.company_id = this.generateCompId();
    this.company_name = name;
    this.company_email = email;
    this.company_mobile = mobile;
    this.company_address = address;
    this.users = [];
    this.distributors = [];
    this.created_on = new Date();
    this.updated_on = new Date();
  }

  private generateCompId () {
    return 'DSC-COMP-'+ Utill.getRandomString();
  }

  //Getter methods
  getCompName () {
    return this.company_name;
  }

  getCompEmail () {
    return this.company_email;
  }

  getCompAddress () {
    return this.company_address;
  }

  getCompMobile () {
    return this.company_mobile;
  }

}