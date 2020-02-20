/**
 * company controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/company.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { Request, Response, NextFunction } from 'express';
import { validationResult } from '../util/common.config';
import { message } from '../util/text.config';
import { ResponseHandler } from '../util/response.config';
import { CompanyAdmin } from '../model/class/company_admin.class.';
import { Company } from '../model/class/comapny.class';
import { CompanyServices } from '../services/company.services';
import { log } from '../log/log.config';
import { Utill } from '../util/utill.methods';
//import * as passwordHash from 'password-hash';

export class CompanyController {

  static async companyValidation(req: Request, res: Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      let errRes = await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err);
      return res.status(422).send(errRes);
    }

    //TODO : Extract the data from request object and call the services
    let user_name: string = req.body.user_name;
    let email: string = req.body.email;
    let password : string = req.body.password;
    let mobile: string = req.body.mobile;
    let country: string = req.body.country;
    let address: string = req.body.address;
    

    let company_name: string = req.body.company_name;
    let company_email: string = req.body.company_email;
    let company_mobile : string = req.body.company_mobile;
    let company_address: string = req.body.company_address;

    let salt : string = await Utill.generateSalt();
    let hashPw : string = await Utill.generatePassword(password, salt);
    
    let user = new CompanyAdmin(user_name, email, hashPw, mobile, country, salt, address);
    let company = new Company(company_name, company_email, company_mobile, company_address);

    try {
      log.info("Comapny Controller called");
      let saveComp = await CompanyServices.registerCompany(user, company);
      return res.status(201).send(await ResponseHandler.info(saveComp, message.company.succ));
    }
    catch (err) {
      log.error("Error at company controller");
      return res.status(500).send(await ResponseHandler.error(err , message.company.err));
    }
  }
}