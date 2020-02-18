import { router } from './../../../server';
import { ProductValidation } from './../validation/product.validation';
import { ProductController } from './../../controller/product.controller';


router.post('/service/product',ProductValidation,ProductController.productCreation);
router.patch('/service/product',ProductValidation,ProductController.productUpdation);

module.exports=router;