// export const checkRegister = (userRegister) => {
//     const { firstName, lastName, number, email, password } = userRegister;
//     const error = [];

//     // ? first name
//     if (!firstName) {
//         error.push("Please add your first name.");
//     } else if (firstName.length > 12) {
//         error.push("Your firstName can be upto 12 characters long.");
//     } else if (firstName.length > 3) {
//         error.push("Your firstName must be at least 3 characters long.");
//     }

//     // ? last name
//     if (!lastName) {
//         error.push("Please add your last name.");
//     } else if (lastName.length > 12) {
//         error.push("Your lastName can be upto 12 characters long.");
//     } else if (lastName.length > 3) {
//         error.push("Your lastName must be at least 3 characters long.");
//     }

//     // ? number
//     if (number.length != 10) {
//         error.push("Your mobile number must be 10 characters long.");
//     } else if (validatePhone(number)) {
//         error.push("Your mobile number format is incorrect.");
//     }

//     // ? email
//     if (!email) {
//         error.push("Please add your email.");
//     } else if (validateEmail(email)) {
//         error.push("Your email format is incorrect.");
//     }

//     // ? password
//     if (password.length < 6) {
//         error.push("Your password must be at least 6 characters long.");
//     }
//     return {
//         errMsg: error,
//         errLength: error.length,
//     };
// };

// const validatePhone = (number) => {
//     const re = /^[+]/g;
//     return re.test(number);
// };

// const validateEmail = (email) => {
//     return String(email)
//         .toLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         );
// };

export const validRegister = (userRegister) => {
    const { firstName, lastName, number, email, password } = userRegister;
    const errors = [];

    if (!firstName) {
        errors.push("Please add your first name.");
    } else if (firstName.length > 12) {
        errors.push("Your firstName can be upto 12 characters long.");
    }

    if (!lastName) {
        errors.push("Please add your last name.");
    } else if (lastName.length > 12) {
        errors.push("Your lastName can be upto 12 characters long.");
    }

    if (number.length != 10) {
        errors.push("Your mobile number must be 10 characters long.");
    }

    if (!email) {
        errors.push("Please add your email.");
    } else if (!validateEmail(email)) {
        errors.push("Your email format is incorrect.");
    }

    if (password.length < 6) {
        errors.push("Password must be at least 6 chars.");
    }

    return {
        errMsg: errors,
        errLength: errors.length,
    };
};

export function validPhone(phone) {
    const re = /^[+]/g;
    return re.test(phone);
}

export function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
