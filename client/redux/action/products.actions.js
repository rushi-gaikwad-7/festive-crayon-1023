
export const SETRANGE="SETRANGE";


export const SetRange = (Range) => async (dispatch) => {
    
    try {
        dispatch({ type: SETRANGE, payload: {Range}});

    } catch (error) {
        dispatch({ type: SETRANGE, payload: {Range}});
    }
};
