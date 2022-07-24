
import axios from "axios";

export const SETRANGE="SETRANGE";
export const GETDATA="GETDATA";
export const SEARCHRESULT="SEARCHRESULT";

export const SetRange = (Range) => async (dispatch) => {
    
    try {
        dispatch({ type: SETRANGE, payload: Range});

    } catch (error) {
        dispatch({ type: SETRANGE, payload:Range});
    }
};

export const SetSearch = (input) => async (dispatch) => {
      
    try {
        dispatch({ type: SETRANGE, payload: Range});

    } catch (error) {
        dispatch({ type: SETRANGE, payload:Range});
    }
};

export const GetData=(url)=>async(dispatch)=>{
    try{
      
        const res = await axios.get(url);
        dispatch({
            type:GETDATA,payload:{ data:res.data.data,
                category:res.data.cats,
                isLoading:false,
                isError:false,}
        })
    }
    catch(error){  
        dispatch({
            type:GETDATA,payload:{ data:[],
                category:[],
                isLoading:false,
                isError:true,}
        })
    }
}
