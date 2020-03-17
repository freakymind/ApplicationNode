
/**
 * common config
 * This file is to store common imports and config data for  the application.
 * @package src/config
 * @subpackage config/common.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth<krishnakanth.r@ojas-it.com>
 */
import { User } from "../model/class/user.class";
import { Company } from '../model/class/comapny.class';
import { CompanyDAO } from '../model/dao/company.dao';
import { UserDAO } from '../model/dao/user.dao';
import { log } from "../log/log.config";
import { JWT } from '../model/class/jwt.class';
import { transactionOptions } from '../util/common.config';
import { DbConn } from '../config/db.config';
import { CompanyAdmin } from "../model/class/company_admin.class.";

//Comapny class
export class CompanyServices {
  private static secretKey: any = process.env.SECRETKEY;

  //Method for registering company.
  static async registerCompany(user: CompanyAdmin, company: Company) {
    let conn = await DbConn.getConnObj();
    let session = await conn.startSession();

    try {

      await session.withTransaction(async () => {
        await UserDAO.saveUser(user, session);
        await CompanyDAO.saveCompany(company, session);
      }, transactionOptions);
      return this.getResObj(user, company);
    } catch (err) {
      log.error(err);
    }
    finally {``
      await session.endSession();
    }

  }

  private static async getResObj(user: CompanyAdmin, company: Company) {
    let resObj = {
      "user_name": user.getUserName(),
      "user_email": user.getUserEmail(),
      "user_mobile": user.getUserMobile(),
      "user_country": user.getUserCountry(),
      "user_role": user.getUserRole(),
      "user_status": user.getUserStatus(),
      "company_name": company.getCompName(),
      "company_email": company.getCompEmail(),
      "company_mobile": company.getCompMobile(),
      "company_address": company.getCompAddress(),
      "token": await JWT.generateToken({
        'user_email': user.getUserEmail(),
        'role': user.getUserRole()
      }),
      "created_on": user.getUserCreatedOn(),
      "updated_on": user.getUserUpdatedOn(),
    }
    return [resObj];
  }
}