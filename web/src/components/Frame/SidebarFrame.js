import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Avatar, Dropdown, message } from 'antd';
import {
  UserOutlined,
  PlusSquareOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './Frame.css';
import { clearToken } from '../../utils/auth';

const {Header, Content, Sidebar} = Layout;

function SidebarFrame(props) {
  const [collapsed, setCollapsed] = useState(false);

  const userMenu = (
    <Menu
      onClick={p => {
        if (p.key === 'logOut') {
          clearToken();
          props.history.push('/login');
        } else message.info(p.key);
      }}>
      <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>
  );

  const popMenu = (
    <Menu
      onClick={p => {
        if (p.key === 'upload') {
          clearToken();
          props.history.push('/article/edit/');
        } else message.info(p.key);
      }}>
      <Menu.Item key="upload">导入文章</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        })}
        <div className="logo"/>
        <div className="small-icon">
          <Dropdown overlay={userMenu} placement="bottomCenter">
            <Avatar icon={<UserOutlined/>}/>
          </Dropdown>
          <Dropdown overlay={popMenu} placement="bottomCenter">
            <PlusSquareOutlined style={{fontSize: '2rem', paddingLeft: '1rem'}}/>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sidebar width={200} className="site-layout-background" trigger={null}
                 collapsible collapsed={collapsed}>
        </Sidebar>
        <Layout style={{padding: '0 24px 24px'}}>
          <Content className="site-layout-background"
                   style={{
                     padding: 24,
                     margin: 0,
                     minHeight: 280,
                   }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(SidebarFrame);
