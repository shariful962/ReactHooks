import React, {useState, useReducer} from "react";


const Reducer = ()=>{

    const initialState = {count: 0};

    const reducer = (state, action)=>{
        switch(action.type){
            case 'increase': {
                return {count: state.count + 1};
            }
            case 'decrease': {
                return {count: state.count - 1};
            }

            default: {
                return state;
            }
        }

    }
     
    const [state, dispatch] = useReducer(Reducer, initialState)
    



    return(
        <>
            <h1>
                Count: {state.count}
            </h1>
            <button onClick={()=> dispatch({type: 'decrease'})}>decrease</button>
            <button onClick = {()=>dispatch({type: 'increase'})}>increase</button>
        </>
    )
}

export default Reducer;