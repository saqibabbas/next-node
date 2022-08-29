const express =  require('express');
const { purchaseController } = require('../../controllers');
const router = express.Router();

router
    .route('/')
    .post(purchaseController.savePurchase)


module.exports = router;