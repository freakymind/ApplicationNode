
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

  static async saveCompany(comapnyDoc: Object) {
    try {
      let db = await DbConn.getCollObj();
      let saveCompRes = await db.insertOne(comapnyDoc);
      log.info("Comapany DAO called");
      return saveCompRes;
    }
    catch (err) {
      log.error("Company DAO error" + err);
      throw err;
    }
  }
  static async getDetails_User(userData:any) {
    try{
      console.log(userData);
      let db = await DbConn.getCollObj();
      let getDetails = await db.findOne({'user.userEmail':userData.userEmail},{'user.randomString':0});
     // console.log(getDetails);
      return getDetails;

    } catch(err) {
      log.error("Company DAO error" + err);
      console.log(err);
    }
  }
}