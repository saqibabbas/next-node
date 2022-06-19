const express =  require('express');
const { productValidation } = require('../../validations');
const { productController } = require('../../controllers');
const { validate, auth } = require('../../middlewares');
const router = express.Router();

router
    .route('/')
    .get(auth, productController.getProducts)
    .post(auth, validate(productValidation.saveProduct),productController.saveProduct)

module.exports = router;