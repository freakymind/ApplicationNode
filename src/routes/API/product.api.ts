import { router } from './../../../server';
import { ProductValidation } from './../validation/product.validation';
import { ProductController } from './../../controller/product.controller';


router.post('/product',ProductValidation,ProductController.productCreation);
router.patch('/product',ProductValidation,ProductController.productUpdation);
router.delete('/product',ProductValidation,ProductController.productDeletion);
module.exports=router;