import React from 'react';
import { Breadcrumb } from 'antd';

const Home = () => {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Home</div>
        </>
    );
};

export default Home;