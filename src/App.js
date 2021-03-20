
import React, { Component } from 'react'
import  style from './App.module.css';
import 'antd/dist/antd.css'
// 插件引入
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// 自定义组件
import BookList from "./components/BookList/index"
import Button from "./components/Button/index"





const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">学生日常行为管理系统</Menu.Item>
          <Menu.Item key="2">
              <span>学院：</span>
              <span>商学院</span>
          </Menu.Item>
          <Menu.Item key="3">
              <span>名字；</span>
              <span>碧莲</span>
          </Menu.Item>
          <Menu.Item key="4" className={style.btn}>
              <Button/>
          </Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
        <SubMenu key="sub1" icon={<UserOutlined />} title="主页面">
          </SubMenu>
          <SubMenu key="sub1" icon={<UserOutlined />} title="老师操作">
            <Menu.Item key="1">学生成绩统计</Menu.Item>
            <Menu.Item key="2">学生成绩详情</Menu.Item>
            <Menu.Item key="3">学生管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="学生操作">
            <Menu.Item key="5">学生成绩结果</Menu.Item>
            <Menu.Item key="6">学生成绩统计</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="系统管理">
            <Menu.Item key="9">日志情况</Menu.Item>
            <Menu.Item key="10">教室用户管理</Menu.Item>
            <Menu.Item key="11">权限管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item className={style.title}>Home</Breadcrumb.Item>
          <Breadcrumb.Item className={style.title}>List</Breadcrumb.Item>
          <Breadcrumb.Item className={style.title}>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <BookList head="tv"/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
      </div>
    )
  }
}
