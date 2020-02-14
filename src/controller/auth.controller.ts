/**
 * auth controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/auth.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { validationResult } from '../util/common.config';
import { ResponseHandler } from '../util/response.config';
import { message } from '../util/text.config';
import { Request, Response } from 'express';
import { AuthServices  } from '../services/auth.services';
import { log } from '../log/log.config';


export class AuthController {
   /** 
    @name authValidation
    @description Method for validating the authentication request body.
    @param Object : req, http request object.
    @return Returns proper response for success and failure case.
  */

  static async validateAuthReq (req : Request, res : Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      let errRes = await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err);
      return res.status(422).send(errRes);
    }

    let user_id = req.body.user_id;
    let password = req.body.password;

    let authRes = await AuthServices.login(user_id, password);
    if(authRes[0].status){
      let succRes = await ResponseHandler.info(authRes, message.login.succ);
      return res.status(200).send(succRes);
    }
    let errRes = await ResponseHandler.error(authRes, message.login.fail);
    return res.status(422).send(errRes);
  }
} 