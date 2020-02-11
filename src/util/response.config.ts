/**
 * Response config
 * This file is used for response standardization.
 * @package src/config
 * @subpackage config/response.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
//Response handler class
export class ResponseHandler {
  //For any success case returns success object
  static async info(obj : any, msg : string) {
    return {
      status: 0,
      msg: msg,
      data: obj
    }
  }
  //For any error case returns error object
  static async error(obj : any, errmsg : string) {
    return {
      status: 1,
      msg: errmsg,
      data: obj
    }
  }
}