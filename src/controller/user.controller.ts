/**
 * user controller
 * This file to extract request body data from request object.
 * @package src/controller
 * @subpackage controller/user.controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { Request, Response } from 'express';
import { validationResult } from '../util/common.config';
import { ResponseHandler } from '../util/response.config';
import { message } from '../util/text.config';
import { JWT } from '../model/class/jwt.class';

 export class UserController {
   /** 
    @name addUser
    @description Method for validating the authentication request body.
    @param Object : req, http request object.
    @return Returns proper response for success and failure case.
  */

  static async addUser(req : Request, res : Response) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      let errRes = await ResponseHandler.error(errors.array(), message.basic.req_body_validation_err);
      return res.status(422).send(errRes);
    }
    
    let token : string = JSON.stringify(req.headers['authorization']);
    let value = token.split(' ');
    //console.log(value[1]);
    let decode = await JWT.verifyToken(value[1]);
    console.log(decode);
    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let country = req.body.country;
    let address = req.body.address;
    let role = req.body.role;

  }
 }