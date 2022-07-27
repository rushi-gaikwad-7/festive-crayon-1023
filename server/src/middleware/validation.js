
const validateRegister = async (req, res, next) => {
    const { firstName, lastName, number, email, password } = req.body;

    if (!firstName) {
        return res.status(400).json({ msg: "Please add your first name." });
    } else if (firstName.length > 12) {
        return res
            .status(400)
            .json({ msg: "Your firstName can be upto 12 characters long." });
    }

    // ? last name
    if (!lastName) {
        return res.status(400).json({ msg: "Please add your last name." });
    } else if (lastName.length > 12) {
        return res
            .status(400)
            .json({ msg: "Your lastName can be upto 12 characters long." });
    }
    // ? number
    if (number.length != 10) {
        return res
            .status(400)
            .json({ msg: "Your mobile number must be 10 characters long." });
    }

    // ? email
    if (!email) {
        return res.status(400).json({ msg: "Please add your email." });
    }

    if (password.length < 6) {
        return res
            .status(400)
            .json({ msg: "Your password must be at least 6 characters long." });
    }
    next();
};

 const validatePhone = (phone) => {
    const re = /^[+]/g;
    return re.test(phone);
};

 const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

module.exports = validateRegister;
