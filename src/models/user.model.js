const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {        
        name: {
          type: String,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          lowercase: true,
        },
        password: {
          type: String,
          required: true,
          trim: true,
          minlength: 8,
        }
      },
      {
        timestamps: true,
      }
);

userSchema.statics.isEmailTaken = async (email)=> {
  const user = await User.findOne({ email});
  return !!user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;