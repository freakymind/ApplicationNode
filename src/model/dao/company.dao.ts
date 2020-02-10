
/**
 * Comapany DAO
 * This file is responsible for provide database access methods for company services.
 * @package src/model
 * @subpackage model/dao/company.dao
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { DbConn } from '../../config/db.config';
import { log } from '../../log/log.config';
//Comapny DAO class

export class CompanyDAO {
  /** 
  @description Method for saving comapny object in DB.
  @param : Compnay collection document.
  @return Returns proper response for success and failure case.
  */

  static async saveCompany(comapnyDoc : Object) {
    try {
      let db = await  DbConn.getCollObj();
      let saveCompRes = await db.insertOne(comapnyDoc);
      console.log(saveCompRes);
      log.info("Comapany DAO called");
    }
    catch (err) {
      console.log(err);
      log.error("Company DAO error");
      
    }

  }
}