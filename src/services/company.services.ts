
/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { User } from "../model/class/user.class";
import { Company } from '../model/class/comapny.class';
import { CompanyDAO } from '../model/dao/company.dao';
import { log } from "../log/log.config";

//Comapny class

export class CompanyServices {

  //Method for registering company.
  static async registerCompany (user : User, company : Company) {
    //Collection object
    let compnayDoc : object ={
      user : [user],
      comapny : company
    }

    try {
      let saveComp = await CompanyDAO.saveCompany(compnayDoc);
      //console.log("Saved");
      log.info("Company service called")
      
    }
    catch (err) {
      console.log(err);
      log.error("Error occured at company services");
      
    }

  }
}