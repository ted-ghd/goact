import React, { useReducer } from 'react'
import { Input, Button, Row, Col } from 'antd';

function reducer(state, action) {
    
    return {
        ...state,
        [action.name] : action.value
    }
}

const NewPhone = (props) => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        phone: ''
    })

    const addPhone = () => {
        props.addPhone(state.name, state.phone)
    }
    const onChange = (e) => {
        dispatch(e.target)
    }
    return(
        <>  
            <Row gutter={[16, 16]}>
                <Col span={10}>
                    <Input placeholder="Name" 
                            name="name" onChange={onChange} 
                            value={state.name}></Input>
                </Col>
                <Col span={10}>
                    <Input placeholder="010-0000-0000" 
                            name="phone" onChange={onChange} 
                            value={state.phone}></Input>
                </Col>
                <Col span={4}>
                    <Button type="primary" onClick={addPhone}>추가</Button>
                </Col>
            </Row>
        </>
    );
} 

export default NewPhone;
