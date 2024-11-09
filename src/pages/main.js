import React from 'react';
import { Outlet } from 'react-router-dom';
import CommonAside from '../components/commonAside';
import CommonHeader from '../components/commonHeader';
import CommonTag from '../components/commonTag';
import { useSelector } from 'react-redux';
import { Layout, } from 'antd';
import { RouterAuth } from '../router/routerAuth'

const { Content } = Layout;
const Main = () => {
  //获取展开收起状态
  const collapsed = useSelector(state => state.tab.isCollapse)

  return (
    <RouterAuth>
      <Layout className='main-container'>
        <CommonAside collapsed={collapsed} />
        <Layout>
          <CommonHeader collapsed={collapsed} />
          <CommonTag />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </RouterAuth>
  )
}

export default Main