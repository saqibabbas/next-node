const Joi = require('joi');

const register = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
});

module.exports= {
    register
};