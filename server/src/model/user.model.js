const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        number: {
            type: String,
            required: true,
            unique: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        userType: {
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
            const hashed = await bcrypt.hashSync(this.password, 10);
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

const User = mongoose.model("user", userSchema);

module.exports = User;
