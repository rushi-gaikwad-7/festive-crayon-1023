const { AUTH } = require("../action/auth.action");

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTH:
            return action.payload;

        default:
            return state;
    }
};

export default authReducer;
