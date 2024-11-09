import React from 'react';
import MenuConfig from '../../config'
import * as Icons from '@ant-design/icons';
import { Button, Layout, Menu, Select, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMenuList } from '../../store/reducers/tab'

const { Header, Sider, Content } = Layout;


//动态获取icon
const iconToElement = (name) => React.createElement(Icons[name])
//处理菜单的数据
const items = MenuConfig.map((item) => {
  //没有子菜单
  const child = {
    key: item.path,
    icon: iconToElement(item.icon),
    label: item.label
  }
  //有子菜单
  if (item.children) {
    child.children = item.children.map((subItem) => {
      return {
        key: subItem.path,
        icon: iconToElement(subItem.icon),
        label: subItem.label
      }
    })
  }
  return child
})

const CommonAside = ({ collapsed }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // 添加数据到store
  const setTabsList = (val) => {
    dispatch(selectMenuList(val))
  }
  //点击菜单
  const SelectMenu = (e) => {
    let data
    MenuConfig.forEach((item) => {
      // 找到当前的数据
      if (item.path === e.keyPath[e.keyPath.length - 1]) {
        data = item
        // 如果是有二级菜单
        if (e.keyPath.length > 1) {
          data = item.children.find((child) => {
            return child.path === e.key
          })
        }
      }
    })
    setTabsList({
      path: data.path,
      name: data.name,
      label: data.label
    })
    navigate(e.key)
  }

  return (
    <Sider trigger={null} collapsed={collapsed} >
      <h3 className='app-name'>{collapsed ? '后台' : '后台管理系统'}</h3>
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        onClick={SelectMenu}
      />
    </Sider>
  )
}

export default CommonAside;