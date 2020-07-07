import React from 'react'
import { Link, withRouter  } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeadMenu = (props) => {

    const { location } = props;
    return(

        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]} >
            <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="/phone"><Link to="/phone">Phone</Link></Menu.Item>
          </Menu>
        </Header>
    );
} 

export default withRouter(HeadMenu);
