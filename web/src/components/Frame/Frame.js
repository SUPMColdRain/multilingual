import React, { useState } from 'react';
import { Avatar, Button, Dropdown, Layout, Menu, message } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined, PlusSquareOutlined,
} from '@ant-design/icons';
import './Frame.css';
import { clearToken } from '../../utils/auth';
import { withRouter } from 'react-router-dom';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

function Frame(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsed = collapsed => {
    setCollapsed(collapsed);
  };

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
    <Layout style={{minHeight: '100vh'}}>
      <Header className="header" style={{padding: 0}}>
        <div className="logo">
          <Button type="link">
            <img style={{height: 64}} alt="Home Icon"
                 src="data:image/png;base64,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"/>
          </Button>
        </div>
        <div className="small-icon">
          <Dropdown overlay={userMenu} placement="bottomCenter">
            <Avatar icon={<UserOutlined/>}/>
          </Dropdown>
          <Dropdown overlay={popMenu} placement="bottomCenter">
            <PlusSquareOutlined style={{fontSize: '2rem', paddingLeft: '1rem'}}/>
          </Dropdown>
        </div>
      </Header>
      <Layout className="site-layout">
        <Sider className="site-layout-background" collapsible collapsed={collapsed} onCollapse={onCollapsed}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined/>}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined/>}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined/>}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{overflow: 'auto'}}>
          <Content  className="site-layout-background" style={{margin: '0 16px'}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
              {props.children}
            </div>
          </Content>
          <Footer  className="site-layout-background" style={{textAlign: 'center'}}/>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withRouter(Frame);
