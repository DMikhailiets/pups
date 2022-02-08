import React, { useState } from 'react'
import {Layout, Menu } from 'antd'

import {
  HomeOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { HomePage, SettingsPage } from '../..';
import { NavLink, Route } from 'react-router-dom';

const { Content, Sider } = Layout;

const RootComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
   <Layout style={{ minHeight: '100vh'}}>
        <Sider theme='dark' collapsible collapsed={collapsed}  onCollapse={() => setCollapsed(!collapsed)}
        onMouseEnter={() => (setCollapsed(false))} onMouseLeave={() => (setCollapsed(true))}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <div style={{height: '50px'}}></div>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <NavLink to='/'>Главная</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              <NavLink to='/settings'>Настройки</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Route exact path='/' render={() => <HomePage/>}/>
              <Route path='/settings' render={() => <SettingsPage/>}/>
            </div>
          </Content>
      </Layout>
    </Layout>
  )
}



export default RootComponent