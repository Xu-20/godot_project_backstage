import React from 'react'
import { useDispatch } from 'react-redux';
import './index.css'
import { Button, Layout, Dropdown, Avatar } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { collapseMenu } from '../../store/reducers/tab'
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const CommonHeader = ({ collapsed }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // 登出
  const logout = () => {
    //清除token
    localStorage.removeItem('token')
    navigate('/login')
  }
  const setCollapsed = () => {
    dispatch(collapseMenu())
  }
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={() => logout()} target="_blank" rel="noopener noreferrer" >
          退出
        </a>
      ),
    }
  ]

  return (
    <Header className='header-container'>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 32,
          background: '#fff'
        }}
      />
      <Dropdown
        menu={{ items }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Avatar size={36} src={<img src={require("../../assets/images/qq.touxiang.jpg")} />} />
        </a>
      </Dropdown>
    </Header>
  )
}

export default CommonHeader