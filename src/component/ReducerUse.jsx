import React, {useReducer} from "react";

const ReducerUse = ()=>{

    const initialState  = {count: 0};

    const reducer = (state, action)=>{
        switch(action.type){
            case 'increase' : {
                return {count: state.count + 1};
            }
            case 'decrease' : {
                return {count: state.count - 1};
            }

            default: {
                return state;
            }
        }
    }
        const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>Count: {state.count} </h1>
            <button onClick={()=>dispatch({type: 'increase'})}>Increase</button>
            <button onClick={()=>dispatch({type: 'decrease'})}>Decrease</button>
        </>
    )
}

export default ReducerUse;