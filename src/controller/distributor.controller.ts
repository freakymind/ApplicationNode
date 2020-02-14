import { Request, Response, NextFunction } from 'express';
import { validationResult } from '../util/common.config';
import { message } from '../util/text.config';
import { ResponseHandler } from '../util/response.config';
import { AppError } from '../util/response.config';
import { Distributor } from '../model/class/distributor.class';
import { DistributorService } from '../services/distributor.services';
import { log } from '../log/log.config';

export class DistributorClass {
  static async addDistributor(req: Request, res: Response, next: NextFunction) {
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
}
