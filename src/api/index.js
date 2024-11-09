import axios from './axios'

export const getData = () => {
  return axios.request({
    url: '/home/getData',
    method: 'get'
  })
}

export const getUser = (params) => {
  return axios.request({
    url: '/user/getUser',
    method: 'get',
    params
  })
}

export const addUser = (data) => {
  return axios.request({
    url: '/user/addUser',
    method: 'post',
    data
  })
}

export const editUser = (data) => {
  return axios.request({
    url: '/user/editUser',
    method: 'post',
    data
  })
}

export const delUser = (data) => {
  return axios.request({
    url: '/user/delUser',
    method: 'post',
    data
  })
}

export const getMenu = (data) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data
  })
}