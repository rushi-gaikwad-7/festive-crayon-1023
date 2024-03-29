const { ALERT } = require("../action/auth.action");

const alertReducer = (state = {}, action) => {
    switch (action.type) {
        case ALERT:
            return action.payload;

        default:
            return state;
    }
};

export default alertReducer;
