const initialState={
    pin:'',
    data:{},
};

const reducer=(state=initialState, action)=>{
    if(action.type=='SET_PIN'){
        return {
            ...state,
            pin:action.payload,
        };
    }
    else if(action.type=='SET_DATA'){
        return {
            ...state,
            data:action.payload,
        };
    }
    return state;
}
export  {reducer};