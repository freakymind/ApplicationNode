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
export class CompanyController {
  
  static async companyValidation(req: any, res: any) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err));
    }

    
  }
}