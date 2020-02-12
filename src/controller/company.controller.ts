/**
 * company controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/company.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { Request, Response } from 'express';
import { validationResult } from '../util/common.config';
import { message } from '../util/text.config';
import { ResponseHandler } from '../util/response.config';
import { User } from '../model/class/user.class';
import { Company } from '../model/class/comapny.class';
import { CompanyServices } from '../services/company.services';
import { log } from '../log/log.config';
export class CompanyController {

  static async companyValidation(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));
    }

    //TODO : Extract the data from request object and call the services
    let name : string = req.body.name;
    let email : string = req.body.email;
    let mobile : string = req.body.mobile;
    let country : number = req.body.country;
    let password : string = req.body.password;

    let comapnyName : string = req.body.company_name;
    let companyEmail : string = req.body.company_email;
    let comapnyAddress : string = req.body.company_address;

    let user = new User(name, email, password, mobile, country);
    let company = new Company(comapnyName, companyEmail, comapnyAddress);

    try {
      log.info("Comapny Controller called");
      let saveComp = await CompanyServices.registerCompany(user, company);
      return res.status(201).send(await ResponseHandler.info(saveComp.ops, message.company.succ));
    }
    catch(err) {
      log.error("Error at company controller");
      return res.status(500).send(ResponseHandler.error(err , message.company.err));
    }
  }
}