import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import style from "./index.module.css"
const menu = (
    <Menu>
      {/* <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          admin
        </a>
      </Menu.Item> */}
      {/* icon={<DownOutlined />} */}
      <Menu.Item >
          个人信息登录
      </Menu.Item>
      <Menu.Item >
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         退出
        </a>
      </Menu.Item>
    </Menu>
  );
export default class index extends Component {
    render() {
        return (
            <div>
                 <Dropdown overlay={menu}  overlayClassName={style.btn}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    admin <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        )
    }
}
