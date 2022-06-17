const express =  require('express');
const { productValidation } = require('../../validations');
const { productController } = require('../../controllers');
const { validate } = require('../../middlewares');
const router = express.Router();

router
    .route('/')
    .get(productController.getProducts)
    .post(validate(productValidation.saveProduct),productController.saveProduct)

module.exports = router;