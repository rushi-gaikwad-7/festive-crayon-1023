const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    address: {
      type: [
        {
          area: String,
          city: String,
          state: String,
          pincode: Number,
        },
      ],
    },
    cart: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "product",
    },
    wishlist: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "product",
    },
    // orders: {
    //   type: [mongoose.Schema.Types.ObjectId],
    //   ref: "product",
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// * pre save middleware to hash the password before saving the new password
userSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hashSync(this.password, salt);
      this.password = hashed;
    }
    next();
  } catch (error) {
    next(error);
  }
});

// * function for comparing and checking password while logging in
userSchema.method.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.models("user", userSchema);

module.exports = User;
