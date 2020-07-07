import React, {useState, useEffect, useReducer } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case 'INC':
            return {value:state.value+1};
        case 'DEC':
            return {value:state.value-1};
        default:
            return state; 
    }
}

const Counter = (props) => {

    const [state, dispatch] = useReducer(reducer, {value: 0});
    const [name, setName] = useState('');
    
    
    useEffect( () => {
        console.log("Counter props name changed")
        setName(props.name)
    },[props.name])

    return(
        <div>
            {name}
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>

            <button onClick={() => dispatch({type:'INC'})}>+1</button>
            <button onClick={() => dispatch({type:'DEC'})}>-1</button>
        </div>
    );
} 

export default Counter;
