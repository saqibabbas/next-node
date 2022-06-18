const { User } = require("../models");

const createUser = async (userBody,res) => {
    console.log(userBody)
    if (await User.isEmailTaken(userBody.email)) {
        res.status(501).json({ error: 'Email already taken' })
    }
    return User.create(userBody);
};

module.exports= {
    createUser
}