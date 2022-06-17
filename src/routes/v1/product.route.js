const express =  require('express');
const { productController } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(productController.getProducts)

module.exports = router;