/**
 * company service
 * This file to define services for company routes.
 * @package src/services
 * @subpackage services/company.service
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { validationResult } from '../config/db.config';
import { ResponseHandler } from '../config/response.config';
import { message } from '../config/text.config';
import { ComapnyDAO } from '../dao/companyDAO';
import { log } from '../log/log.config';
//Company service class
export class CompanyServices {
  /** 
   * Saves company detail in database.
     @param {object} req - http request object.
     @param {object} res - http response object.
     @returns {response} Returns either a "success" or an "error" Object
  */
  static async registerCompany(req, res) {
    log.info('registerCompany() method called');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));
    }

    try {
      let obj = {
        company : {
          companyName : req.body.company_name,
          companyEmail : req.body.company_email,
          comapanyAddress : req.body.company_address
        },
        user : [
          {
            ownerName: req.body.owner_address,
            ownerEmail: req.body.owner_email,
            ownerMobile: req.body.owner_mobile,
            ownerCountry: req.body.owner_country
          }
        ]
      }

      let saveCompRes = await ComapnyDAO.saveCompany(obj);
      return res.status(200).send(await ResponseHandler.info(saveCompRes, message.company.succ));
    }
    catch (err) {
      log.error(err);
      return res.status(422).send(await ResponseHandler.error(err, message.company.err));
    }
  }
}
