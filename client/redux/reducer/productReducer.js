import { GETDATA, SETRANGE } from "../action/products.actions";

let initState={
    Range:[0,2000],
    Data:{
        data:[],
        category:[],
        isLoading:true,
        isError:false,
    },
    Search:{input:""},
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
