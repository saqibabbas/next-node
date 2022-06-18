const { userService } = require("../services");

const register = async (req, res) => {
    const user = await userService.createUser(req.body, res);
    //const tokens = await tokenService.generateAuthTokens(user);
    res.send({ user });
};
  
module.exports={
    register
}