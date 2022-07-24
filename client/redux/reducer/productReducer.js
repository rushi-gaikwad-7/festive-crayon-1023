import { GETDATA, SETRANGE } from "../action/products.actions";

let initState={
    Range:[0,5000],
    Data:{
        data:[],
        category:[],
        isLoading:true,
        isError:false,
    }
}

const ProductReducer = (state = initState, {payload,type}) => {
    
    switch (type) {
        case SETRANGE:
            return{...state, Range:payload}
            case GETDATA:
                return{...state, Data:payload}
        default:
            return state;
    }
};
export default ProductReducer;
