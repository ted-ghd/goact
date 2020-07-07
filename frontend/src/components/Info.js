import React, {  useEffect, useReducer } from 'react';

function reducer(state, action) {
    
    if (action.type === "name") {

        return {
            ...state,
            name: action.value
        }
    }
    return {
        ...state,
        [action.name] : action.value
    }
}
const Info = (props) => {
    
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickName: ''
    })

    const { name, nickName } = state;

    useEffect(()=>{
        console.log("Info props name changed")
        dispatch({type:"name", value:props.name})
    }, [props.name]);

    useEffect(() => {
        console.log("Info mounted")

        return () => {
            console.log("Info cleanUp")
        }
    }, [])

    const onChange = e => {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName" value={nickName} onChange={onChange}/>
            </div>

            <div>
                <div>
                    <b>이름: </b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickName}
                </div>
            </div>
        </div>
    )
}

export default Info;