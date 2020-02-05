/**
 * company route
 * This file to define routes for company file.
 * @package src/routes
 * @subpackage routes/company
 * @author Sekhara suman sahu <sekharasahu@gmail.com>
 */
import { TestServices } from '../../services/test';
import { TestNameValidation } from '../validation/company.validation';
//Default route for checking server status
router.get('/', (req, res)=>{
  res.status(200).send({msg : 'Server running...!!!', status : 0});
});

//Router for Compeny registrtion
router.post('/service/registerCompany', TestNameValidation, TestServices.saveTest);

module.exports = router;