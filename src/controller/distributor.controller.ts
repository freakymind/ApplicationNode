import { Request, Response, NextFunction } from 'express';
import { validationResult } from '../util/common.config';
import { message } from '../util/text.config';
import { ResponseHandler } from '../util/response.config';
import { AppError } from '../util/response.config';
import { Distributor } from '../model/class/distributor.class';
import { DistributorService } from '../services/distributor.services';
import { log } from '../log/log.config';

/**
 * common config
 * This file will add the distributors,and update the distributors list,delete distributors
 * @package controller
 * @subpackage /distributor.controller.ts
 * @author krishnakanth<krishnakanth.r@ojas-it.com>
 */
export class DistributorClass {
  /**
  * @desc this method for adding the distributors.
  * @method addDistributors 
  * @param {Object} request - It is Request object
  * @param {Object} response - It is Response object
  * @return return message and status code
  **/
  static async addDistributor(req: Request, res: Response) {
    try {
      let referenceBy: string = req.body.reference_by;
      let name: string = req.body.name;
      let email: string = req.body.email;
      let mobile: number = req.body.mobile;
      let country: number = req.body.country;
      let distributor = new Distributor(name, email, mobile, country, referenceBy);
      let adddistributor = await DistributorService.adddistributor(distributor);
      console.log(adddistributor);
      res.send(adddistributor);
      //res.send( ResponseHandler.info(adddistributor,"adddistributor.message"));
    } catch (err) {
      res.send(new AppError(`${err}`, 400));
    }
  }

  /**
* @desc this method for update the distributors details.
* @method updateDistributor
* @param {Object} request - It is Request object
* @param {Object} response - It is Response object
* @return return message and status code
**/
  static async updateDistributor(req: Request, res: Response) {
    try {
      let updateBy: string = req.body.update_by;
      let name: string = req.body.name;
      let email: string = req.body.email;
      let mobile: number = req.body.mobile;
      let country: number = req.body.country;
      let updateDistributor: any = new Distributor(name, email, mobile, country, updateBy);
      let updateDistributorList = await DistributorService.updateDistributorDetails(updateDistributor);
      console.log(updateDistributorList);
      return res.send(updateDistributorList);

    } catch (err) {
      return res.send(new AppError(`${err}`, 400));
    }
  }

  /**
* @desc this method for delete the distributor .
* @method deleteDistributorDetails
* @param req:{request}
* @param res:{response}
* @return return message and status code
**/
  static async deleteDistributor(req: Request, res: Response) {
    try {
      let email: string = req.params.email;
      let deleteDistributor: any = await DistributorService.deleteDistributordetails(email);
      console.log(deleteDistributor);
      return res.send(deleteDistributor);
    } catch (err) {
      return res.send(new AppError(`${err}`, 400));
    }
  }
}
