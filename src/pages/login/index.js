import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { getMenu } from '../../api'
import "./index.css"
import { useNavigate, Navigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  //在登录状态下，直接跳转到首页
  if (localStorage.getItem('token')) {
    return <Navigate to="/home" replace />
  }
  // 定义一个处理表单提交的函数
  const handleSubmit = (val) => {
    // 检查用户名和密码是否为空
    if (!val.password || !val.username) {
      // 如果为空，弹出警告框提示用户输入用户名和密码
      return message.open({
        type: 'warning',
        content: '请输入用户名和密码',
      });
    }
    getMenu(val).then(({ data }) => {
      // 这里需要检查返回的数据是否包含有效的 token 或者其他验证信息
      if (data && data.data && data.data.token) {
        localStorage.setItem('token', data.data.token);
        navigate('/home');
      } else {
        // 如果返回的数据不合法，弹出一个提示
        message.error('登录失败，请检查用户名和密码');
      }
    });
  };

  return (
    <Form
      className="login-container"
      onFinish={handleSubmit}
    >
      <div className="login_title">系统登录</div>
      <Form.Item
        label="账号"
        name="username"
      >
        <Input placeholder="请输入账号" />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
      >
        <Input.Password placeholder="请输入账号" />
      </Form.Item>
      <Form.Item className="login-button">
        <Button type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  )
}

export default Login