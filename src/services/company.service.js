/**
 * company controller
 * This file to define controllers for company file.
 * @package src/controller
 * @subpackage controller/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { validationResult } from '../config/response.config'
import { TestDAO } from '../dao/test';

export class TestServices {
  static async saveName(req, res){
    try {
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let name = req.body.name;
    let saveName = await TestDAO.saveName(name);

    if(saveName){
      res.send(saveName)
    } else {
      res.send({err : errors.array()});
    }
    } catch (err) {
      console.log(err);
    }
    
  }
}