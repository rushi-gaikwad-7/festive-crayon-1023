import { SETRANGE } from "../action/products.actions";

let initState={
    Range:[0,5000]
}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case SETRANGE:
            return state.Range=action.payload
        default:
            return state;
    }
};
export default ProductReducer;
