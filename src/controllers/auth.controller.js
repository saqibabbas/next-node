const { userService, tokenService, authService } = require("../services");

const register = async (req, res) => {
    const user = await userService.createUser(req.body, res);
    const token = await tokenService.generateAccessToken(user);
    res.send({ user, token });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email,password)
    const user = await authService.loginUserWithEmailAndPassword(email, password, res);
    const token = await tokenService.generateAccessToken(user);
    res.send({ user, token });
};
  
module.exports={
    register,
    login
}