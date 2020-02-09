/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

//Comapny class

export class Company {
  compName: string;
  compEmail: string;
  compAddress: string;

  constructor(name: string, email: string, address: string) {
    this.compName = name;
    this.compEmail = email;
    this.compAddress = address;
  }
}