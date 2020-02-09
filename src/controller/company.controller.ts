/**
 * company controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/company.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { validationResult } from '../config/common.config';
import { message } from '../config/text.config';
import { ResponseHandler } from '../config/response.config';
import { User } from '../model/class/user.class';
import { Company } from '../model/class/comapny.class';
import { CompanyServices } from '../services/company.services';
import { log } from '../log/log.config';
export class CompanyController {

  static async companyValidation(req: any, res: any) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));
    }

    //TODO : Extract the data from request object and call the services
    let name : string = req.body.name;
    let email : string = req.body.email;
    let mobile : string = req.body.name;
    let country : number = req.body.name;

    let comapnyName = String = req.body.company_name;
    let companyEmail = String = req.body.comapany_email;
    let comapnyAddress = String = req.body.comapny_address;

    let user = new User(name, email, mobile, country);
    let company = new Company(comapnyName, companyEmail, comapnyAddress);

    try {
      let saveComp = await CompanyServices.registerCompany(user, company);
      log.info("Comapny Controller called");
    }
    catch(err) {
      log.error("Error at company controller");
    }




  }
}