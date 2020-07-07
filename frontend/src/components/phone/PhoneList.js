import React, { useState, useEffect } from 'react'
import { Table, Button } from 'antd';
import NewPhone from 'components/phone/NewPhone'
//import {v4 as uuid} from 'uuid'
import * as api from 'lib/api';

const PhoneList = (props) => {

    const [phoneList, setPhoneList] = useState([]) 
    
    useEffect(()=>{
        listPhone()
    }, [])
    
    useEffect(()=>{
        console.log("list changed rerender")
    }, [phoneList])

    const listPhone = async () => {
        try{
            const response = await api.listPhone();
            //console.log(response)
            setPhoneList(response.data)

        } catch(e) {
            console.log(e)
        }
    }

    const deletePhone = async (id) => {
        try{
            const targetPhone = {name:"", phone:"", id:id}
            const response = await api.deletePhone(targetPhone);

            console.log(response)
            listPhone()
        } catch(e) {
            console.log(e)
        }
    }
    const insertPhone = async (data) => {
        try {
            //const response = 
            await api.insertPhone(data);
            //console.log(response)
            listPhone()
        } catch(e) {
            console.log(e)
        }
    }
    const addPhone = (name, phone) => {
        
        const newPhone = { name:name, phone:phone }
        insertPhone(newPhone)
        //const newList = phoneList.concat(newPhone)
        //setPhoneList(newList)
    }

    
    const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Delete',
        key: 'action',
        render: (text, record) => (
          <Button type="danger" onClick={()=>deletePhone(record.id)}>
          삭제
          </Button>
        ),
      },
    ];

    return(
        <> 
            <NewPhone addPhone={addPhone}/>
            <Table rowKey="id" dataSource={phoneList} columns={columns} />
        </>
    );
} 

export default PhoneList;
