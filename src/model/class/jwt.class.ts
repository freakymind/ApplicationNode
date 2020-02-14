/**
 * jwt class
 * This file is to generate and manage JWT auth tokens.
 * @package src/model
 * @subpackage model/class/jwt.class
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */

import jwt from 'jsonwebtoken';
import { log } from '../../log/log.config';
//JSON webtoken class

export class JWT {

  private static key : any = process.env.JWT_SECRETKEY;

  /**
  @name generateToken.
  @description Method for generating JWT token for individual user.
  @param : object = any paylod need to encrypt
  @return a jwt auth token.
  */

  static async generateToken(data: object) {
    log.info('JWT token generation method called');
    try {
      return jwt.sign(data, JWT.key, { expiresIn: '1h' });
    }
    catch (err) {
      log.error(err);
      throw new Error(err);
    }
  }

  /**
  @name verifyToken.
  @description Method for veryfing JWT token.
  @param : jwt token
  @return : boolean = either true or false.
  */

  static async verifyToken(token: string) {
    log.info('JWT token verification method called');
    try {
      let decode = jwt.verify(token, JWT.key);
      return decode;
    }
    catch (err) {
      log.error(err);
      throw new Error(err);
    }
  }

  //TODO : Update expired token.
  /**
  @name updateToken.
  @description Method for updatating expired JWT token.
  @param : jwt token
  @return : boolean = either true or false.
  */

}