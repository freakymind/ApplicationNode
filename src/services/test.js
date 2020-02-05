/**
 * test controller
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import {
  TestDAO
} from '../dao/test';
import {
  validationResult
} from '../config/db.config';
import {
  ResponseHandler
} from '../config/response.config';
import {
  message
} from '../config/text.config';

export class TestServices {
  static async saveTest(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).send(await ResponseHandler.error(errors.array(), message.basic.error));
      }
      let name = req.body.name;
      let TestDAORes = await TestDAO.saveName(name);
      if (TestDAORes) {
        res.send(await ResponseHandler.info(TestDAORes.ops, message.compnay.succ));
      }
    } catch (err) {
      console.log(err);
    }
  }
}