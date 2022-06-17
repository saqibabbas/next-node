const Joi = require('joi');

const saveProduct = Joi.object().keys({
        id: Joi.number().required(),
        date: Joi.date().required(),
        name: Joi.string().required(),
        shipTo: Joi.string().required(),
        paymentMethod: Joi.string().required(),
        amount: Joi.number().required(),
});

module.exports= {
    saveProduct
};