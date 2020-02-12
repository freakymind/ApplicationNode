/**
 * Response config
 * This file is used for response standardization.
 * @package src/config
 * @subpackage config/response.config
 * @author Sekhara suman sahu <sekharasahu@gmail.com>,krishnakanth<krishnakanth.r@ojas-it.com>
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
export class AppError extends Error {
  statusCode:number;
  status: string;
  isOperational: boolean;
  constructor(message:string, statusCode:number) {
      super();
      this.statusCode = statusCode;
      this.message = message;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;

      Error.captureStackTrace(this, this.constructor);
  }
}