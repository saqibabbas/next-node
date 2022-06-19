const { User } = require("../models");
const bcrypt = require('bcryptjs');

const createUser = async (userBody,res) => {
    const { name, email, password } = userBody;

    if (await User.isEmailTaken(email)) {
        res.status(501).json({ error: 'Email already taken' })
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    return await User.create({
      name,
      email,
      password: encryptedPassword,
    });
};

const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

module.exports= {
    createUser,
    getUserByEmail
}