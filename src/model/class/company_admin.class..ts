/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/model
 * @subpackage model/class
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

import { User } from './user.class';
import { Utill } from '../../util/utill.methods';
import { role } from '../../util/common.config';

//Defining company admin class
export class CompanyAdmin extends User{

  constructor(name: string, email: string, password: string, mobile: string, country: string,
    salt: string, address: string) {
    //user class constructor called  
    super(name, email, password, mobile, country, salt, address);
  }

  generateUserId(): string {
    return 'DSC-USER-' + Utill.getRandomString();
  } 
  setRole(): string {
    return role.company_admin;
  }
}