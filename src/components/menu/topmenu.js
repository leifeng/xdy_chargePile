import React from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Dropdown from "antd/lib/dropdown";
const menu = (
  <Menu>
    <Menu.Item key="1">
      <a href="#">退出</a>
    </Menu.Item>
  </Menu>
);
export default class TopMenu extends React.Component{
	render(){
		return ( 
		        <div className="topMenu">
		        	  <Dropdown overlay={menu} trigger={['click']}>
					    <a className="ant-dropdown-link" href="#">
					      管理员 <Icon type="down" />
					    </a>
					  </Dropdown>
	        	</div>  
			)
	}
}