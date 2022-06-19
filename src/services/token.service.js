const jwt = require('jsonwebtoken');

const generateAccessToken= (user)=>{
    const token = jwt.sign(
        { name: user.name, email:user.email },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
    return token;
};

module.exports={
    generateAccessToken
}