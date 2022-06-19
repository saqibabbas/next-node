const { userService } = require("../services");

const loginUserWithEmailAndPassword = async (email, password, res) => {
    const user = await userService.getUserByEmail(email);
    if (!user || !(await user.isPasswordMatch(password))) {
        res.status(403).json({ error: 'Incorrect email or password' })
    }
    return user;
};

module.exports={
    loginUserWithEmailAndPassword
}