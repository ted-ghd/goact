import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, Route } from 'react-router-dom';
import PhoneList from 'components/phone/PhoneList'
const Phone = () => {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Phone</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Route exact path="/phone" component={PhoneList}/>
                <Route path="/phone/list" component={PhoneList}/>
            </div>
        </>
    );
};

export default Phone;